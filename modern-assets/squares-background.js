// Squares Background Animation
class SquaresBackground {
  constructor(options = {}) {
    // Default options
    this.options = {
      direction: options.direction || 'diagonal',
      speed: options.speed || 0.5,
      borderColor: options.borderColor || '#333',
      squareSize: options.squareSize || 40,
      hoverFillColor: options.hoverFillColor || '#222',
      backgroundColor: options.backgroundColor || '#060606',
      selector: options.selector || '.hero-modern',
      zIndex: options.zIndex || -1
    };
    
    this.canvas = null;
    this.ctx = null;
    this.requestId = null;
    this.numSquaresX = 0;
    this.numSquaresY = 0;
    this.gridOffset = { x: 0, y: 0 };
    this.hoveredSquare = null;
    
    this.init();
  }
  
  init() {
    // Find the container element
    const container = document.querySelector(this.options.selector);
    if (!container) {
      console.error(`Element with selector ${this.options.selector} not found`);
      return;
    }
    
    // Create canvas element
    this.canvas = document.createElement('canvas');
    this.canvas.className = 'squares-background';
    this.canvas.style.position = 'absolute';
    this.canvas.style.top = '0';
    this.canvas.style.left = '0';
    this.canvas.style.width = '100%';
    this.canvas.style.height = '100%';
    this.canvas.style.zIndex = this.options.zIndex;
    this.canvas.style.background = this.options.backgroundColor;
    
    // Add canvas to container
    container.style.position = 'relative';
    container.insertBefore(this.canvas, container.firstChild);
    
    // Get context
    this.ctx = this.canvas.getContext('2d');
    if (!this.ctx) {
      console.error('Could not get canvas context');
      return;
    }
    
    // Set up event listeners
    window.addEventListener('resize', this.resizeCanvas.bind(this));
    this.canvas.addEventListener('mousemove', this.handleMouseMove.bind(this));
    this.canvas.addEventListener('mouseleave', this.handleMouseLeave.bind(this));
    
    // Initial setup
    this.resizeCanvas();
    this.startAnimation();
  }
  
  resizeCanvas() {
    if (!this.canvas) return;
    
    this.canvas.width = this.canvas.offsetWidth;
    this.canvas.height = this.canvas.offsetHeight;
    this.numSquaresX = Math.ceil(this.canvas.width / this.options.squareSize) + 1;
    this.numSquaresY = Math.ceil(this.canvas.height / this.options.squareSize) + 1;
  }
  
  drawGrid() {
    if (!this.ctx || !this.canvas) return;
    
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    
    const startX = Math.floor(this.gridOffset.x / this.options.squareSize) * this.options.squareSize;
    const startY = Math.floor(this.gridOffset.y / this.options.squareSize) * this.options.squareSize;
    
    this.ctx.lineWidth = 0.5;
    
    for (let x = startX; x < this.canvas.width + this.options.squareSize; x += this.options.squareSize) {
      for (let y = startY; y < this.canvas.height + this.options.squareSize; y += this.options.squareSize) {
        const squareX = x - (this.gridOffset.x % this.options.squareSize);
        const squareY = y - (this.gridOffset.y % this.options.squareSize);
        
        if (
          this.hoveredSquare &&
          Math.floor((x - startX) / this.options.squareSize) === this.hoveredSquare.x &&
          Math.floor((y - startY) / this.options.squareSize) === this.hoveredSquare.y
        ) {
          this.ctx.fillStyle = this.options.hoverFillColor;
          this.ctx.fillRect(squareX, squareY, this.options.squareSize, this.options.squareSize);
        }
        
        this.ctx.strokeStyle = this.options.borderColor;
        this.ctx.strokeRect(squareX, squareY, this.options.squareSize, this.options.squareSize);
      }
    }
    
    // Add radial gradient overlay
    const gradient = this.ctx.createRadialGradient(
      this.canvas.width / 2,
      this.canvas.height / 2,
      0,
      this.canvas.width / 2,
      this.canvas.height / 2,
      Math.sqrt(Math.pow(this.canvas.width, 2) + Math.pow(this.canvas.height, 2)) / 2
    );
    gradient.addColorStop(0, 'rgba(6, 6, 6, 0)');
    gradient.addColorStop(1, this.options.backgroundColor);
    
    this.ctx.fillStyle = gradient;
    this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
  }
  
  updateAnimation() {
    const effectiveSpeed = Math.max(this.options.speed, 0.1);
    
    switch (this.options.direction) {
      case 'right':
        this.gridOffset.x = (this.gridOffset.x - effectiveSpeed + this.options.squareSize) % this.options.squareSize;
        break;
      case 'left':
        this.gridOffset.x = (this.gridOffset.x + effectiveSpeed + this.options.squareSize) % this.options.squareSize;
        break;
      case 'up':
        this.gridOffset.y = (this.gridOffset.y + effectiveSpeed + this.options.squareSize) % this.options.squareSize;
        break;
      case 'down':
        this.gridOffset.y = (this.gridOffset.y - effectiveSpeed + this.options.squareSize) % this.options.squareSize;
        break;
      case 'diagonal':
        this.gridOffset.x = (this.gridOffset.x - effectiveSpeed + this.options.squareSize) % this.options.squareSize;
        this.gridOffset.y = (this.gridOffset.y - effectiveSpeed + this.options.squareSize) % this.options.squareSize;
        break;
    }
    
    this.drawGrid();
    this.requestId = requestAnimationFrame(this.updateAnimation.bind(this));
  }
  
  handleMouseMove(event) {
    if (!this.canvas) return;
    
    const rect = this.canvas.getBoundingClientRect();
    const mouseX = event.clientX - rect.left;
    const mouseY = event.clientY - rect.top;
    
    const startX = Math.floor(this.gridOffset.x / this.options.squareSize) * this.options.squareSize;
    const startY = Math.floor(this.gridOffset.y / this.options.squareSize) * this.options.squareSize;
    
    const hoveredSquareX = Math.floor((mouseX + this.gridOffset.x - startX) / this.options.squareSize);
    const hoveredSquareY = Math.floor((mouseY + this.gridOffset.y - startY) / this.options.squareSize);
    
    this.hoveredSquare = { x: hoveredSquareX, y: hoveredSquareY };
  }
  
  handleMouseLeave() {
    this.hoveredSquare = null;
  }
  
  startAnimation() {
    this.requestId = requestAnimationFrame(this.updateAnimation.bind(this));
  }
  
  stopAnimation() {
    if (this.requestId) {
      cancelAnimationFrame(this.requestId);
      this.requestId = null;
    }
  }
  
  destroy() {
    this.stopAnimation();
    
    if (this.canvas) {
      window.removeEventListener('resize', this.resizeCanvas.bind(this));
      this.canvas.removeEventListener('mousemove', this.handleMouseMove.bind(this));
      this.canvas.removeEventListener('mouseleave', this.handleMouseLeave.bind(this));
      
      if (this.canvas.parentNode) {
        this.canvas.parentNode.removeChild(this.canvas);
      }
    }
    
    this.canvas = null;
    this.ctx = null;
  }
}

// Initialize the squares background when the DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
  // Create squares background for hero section
  const heroSquares = new SquaresBackground({
    selector: '.hero-modern',
    direction: 'diagonal',
    speed: 0.5,
    squareSize: 40,
    borderColor: 'rgba(0, 115, 245, 0.2)',
    hoverFillColor: 'rgba(0, 115, 245, 0.1)',
    backgroundColor: '#060606',
    zIndex: 0
  });
});
