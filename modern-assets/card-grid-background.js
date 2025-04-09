// Card Grid Background Animation
class CardGridBackground {
  constructor(options = {}) {
    // Default options
    this.options = {
      direction: options.direction || 'diagonal',
      speed: options.speed || 0.3,
      borderColor: options.borderColor || 'rgba(0, 115, 245, 0.1)',
      squareSize: options.squareSize || 20,
      hoverFillColor: options.hoverFillColor || 'rgba(0, 115, 245, 0.05)',
      backgroundColor: options.backgroundColor || 'transparent',
      selector: options.selector || '.card-modern',
      zIndex: options.zIndex || 0
    };

    this.canvases = [];
    this.contexts = [];
    this.requestIds = [];
    this.gridOffsets = [];
    this.hoveredSquares = [];

    this.init();
  }

  init() {
    // Find all card elements
    const cards = document.querySelectorAll(this.options.selector);
    if (!cards.length) {
      console.error(`No elements with selector ${this.options.selector} found`);
      return;
    }

    // Initialize each card with a canvas
    cards.forEach((card, index) => {
      this.initCard(card, index);
    });
  }

  initCard(card, index) {
    // Create canvas element
    const canvas = document.createElement('canvas');
    canvas.className = 'card-grid-background';
    canvas.style.position = 'absolute';
    canvas.style.top = '0';
    canvas.style.left = '0';
    canvas.style.width = '100%';
    canvas.style.height = '100%';
    canvas.style.zIndex = this.options.zIndex;
    canvas.style.background = this.options.backgroundColor;
    canvas.style.borderRadius = 'inherit';
    canvas.style.pointerEvents = 'none'; // Allow clicks to pass through

    // Store canvas reference
    this.canvases[index] = canvas;

    // Add canvas to card
    card.style.position = 'relative';
    card.style.overflow = 'hidden';

    // Insert canvas as the first child, but after the ::before pseudo-element
    const firstChild = card.firstChild;
    if (firstChild) {
      card.insertBefore(canvas, firstChild);
    } else {
      card.appendChild(canvas);
    }

    // Get context
    this.contexts[index] = canvas.getContext('2d');
    if (!this.contexts[index]) {
      console.error('Could not get canvas context');
      return;
    }

    // Initialize grid offset
    this.gridOffsets[index] = { x: 0, y: 0 };

    // Initialize hovered square
    this.hoveredSquares[index] = null;

    // Set up event listeners
    canvas.addEventListener('mousemove', (e) => this.handleMouseMove(e, index));
    canvas.addEventListener('mouseleave', () => this.handleMouseLeave(index));

    // Initial setup
    this.resizeCanvas(index);
    this.startAnimation(index);
  }

  resizeCanvas(index) {
    const canvas = this.canvases[index];
    if (!canvas) return;

    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;
  }

  drawGrid(index) {
    const ctx = this.contexts[index];
    const canvas = this.canvases[index];
    if (!ctx || !canvas) return;

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    const startX = Math.floor(this.gridOffsets[index].x / this.options.squareSize) * this.options.squareSize;
    const startY = Math.floor(this.gridOffsets[index].y / this.options.squareSize) * this.options.squareSize;

    ctx.lineWidth = 0.5;

    for (let x = startX; x < canvas.width + this.options.squareSize; x += this.options.squareSize) {
      for (let y = startY; y < canvas.height + this.options.squareSize; y += this.options.squareSize) {
        const squareX = x - (this.gridOffsets[index].x % this.options.squareSize);
        const squareY = y - (this.gridOffsets[index].y % this.options.squareSize);

        if (
          this.hoveredSquares[index] &&
          Math.floor((x - startX) / this.options.squareSize) === this.hoveredSquares[index].x &&
          Math.floor((y - startY) / this.options.squareSize) === this.hoveredSquares[index].y
        ) {
          ctx.fillStyle = this.options.hoverFillColor;
          ctx.fillRect(squareX, squareY, this.options.squareSize, this.options.squareSize);
        }

        ctx.strokeStyle = this.options.borderColor;
        ctx.strokeRect(squareX, squareY, this.options.squareSize, this.options.squareSize);
      }
    }

    // Add radial gradient overlay
    const gradient = ctx.createRadialGradient(
      canvas.width / 2,
      canvas.height / 2,
      0,
      canvas.width / 2,
      canvas.height / 2,
      Math.sqrt(Math.pow(canvas.width, 2) + Math.pow(canvas.height, 2)) / 2
    );
    gradient.addColorStop(0, 'rgba(0, 0, 0, 0)');
    gradient.addColorStop(1, 'rgba(0, 0, 0, 0.1)');

    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, canvas.width, canvas.height);
  }

  updateAnimation(index) {
    const effectiveSpeed = Math.max(this.options.speed, 0.1);

    switch (this.options.direction) {
      case 'right':
        this.gridOffsets[index].x = (this.gridOffsets[index].x - effectiveSpeed + this.options.squareSize) % this.options.squareSize;
        break;
      case 'left':
        this.gridOffsets[index].x = (this.gridOffsets[index].x + effectiveSpeed + this.options.squareSize) % this.options.squareSize;
        break;
      case 'up':
        this.gridOffsets[index].y = (this.gridOffsets[index].y + effectiveSpeed + this.options.squareSize) % this.options.squareSize;
        break;
      case 'down':
        this.gridOffsets[index].y = (this.gridOffsets[index].y - effectiveSpeed + this.options.squareSize) % this.options.squareSize;
        break;
      case 'diagonal':
        this.gridOffsets[index].x = (this.gridOffsets[index].x - effectiveSpeed + this.options.squareSize) % this.options.squareSize;
        this.gridOffsets[index].y = (this.gridOffsets[index].y - effectiveSpeed + this.options.squareSize) % this.options.squareSize;
        break;
    }

    this.drawGrid(index);
    this.requestIds[index] = requestAnimationFrame(() => this.updateAnimation(index));
  }

  handleMouseMove(event, index) {
    const canvas = this.canvases[index];
    if (!canvas) return;

    const rect = canvas.getBoundingClientRect();
    const mouseX = event.clientX - rect.left;
    const mouseY = event.clientY - rect.top;

    const startX = Math.floor(this.gridOffsets[index].x / this.options.squareSize) * this.options.squareSize;
    const startY = Math.floor(this.gridOffsets[index].y / this.options.squareSize) * this.options.squareSize;

    const hoveredSquareX = Math.floor((mouseX + this.gridOffsets[index].x - startX) / this.options.squareSize);
    const hoveredSquareY = Math.floor((mouseY + this.gridOffsets[index].y - startY) / this.options.squareSize);

    this.hoveredSquares[index] = { x: hoveredSquareX, y: hoveredSquareY };
  }

  handleMouseLeave(index) {
    this.hoveredSquares[index] = null;
  }

  startAnimation(index) {
    this.requestIds[index] = requestAnimationFrame(() => this.updateAnimation(index));
  }

  stopAnimation(index) {
    if (this.requestIds[index]) {
      cancelAnimationFrame(this.requestIds[index]);
      this.requestIds[index] = null;
    }
  }

  destroy() {
    this.canvases.forEach((canvas, index) => {
      this.stopAnimation(index);

      if (canvas && canvas.parentNode) {
        canvas.parentNode.removeChild(canvas);
      }
    });

    this.canvases = [];
    this.contexts = [];
    this.requestIds = [];
    this.gridOffsets = [];
    this.hoveredSquares = [];
  }
}

// Initialize the card grid backgrounds when the DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
  // Wait a bit to ensure cards are fully rendered
  setTimeout(() => {
    // Create grid background for cards
    const cardGrids = new CardGridBackground({
      selector: '.card-modern',
      direction: 'diagonal',
      speed: 0.15,
      squareSize: 15,
      borderColor: 'rgba(0, 115, 245, 0.15)',
      hoverFillColor: 'rgba(0, 115, 245, 0.1)',
      backgroundColor: 'transparent',
      zIndex: 0
    });

    // Add event listener for window resize
    window.addEventListener('resize', () => {
      // Destroy and recreate grid backgrounds on window resize
      if (cardGrids) {
        cardGrids.destroy();

        // Recreate after a short delay
        setTimeout(() => {
          const newCardGrids = new CardGridBackground({
            selector: '.card-modern',
            direction: 'diagonal',
            speed: 0.15,
            squareSize: 15,
            borderColor: 'rgba(0, 115, 245, 0.15)',
            hoverFillColor: 'rgba(0, 115, 245, 0.1)',
            backgroundColor: 'transparent',
            zIndex: 0
          });
        }, 300);
      }
    });
  }, 500);
});
