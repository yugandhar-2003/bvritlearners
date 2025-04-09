/**
 * Google Maps Error Handler
 * This script handles potential errors with Google Maps embeds
 */

document.addEventListener('DOMContentLoaded', function() {
    // Find all Google Maps iframes
    const mapIframes = document.querySelectorAll('iframe[src*="google.com/maps"]');
    
    // Add error handling for each iframe
    mapIframes.forEach(iframe => {
        // Add a fallback in case the iframe fails to load
        iframe.onerror = function() {
            handleMapError(iframe);
        };
        
        // Also check if the iframe loaded correctly after a timeout
        setTimeout(() => {
            checkIframeLoaded(iframe);
        }, 3000);
    });
    
    // Function to handle map loading errors
    function handleMapError(iframe) {
        const container = iframe.parentNode;
        
        // Create fallback content
        const fallbackContent = document.createElement('div');
        fallbackContent.className = 'map-fallback';
        fallbackContent.style.cssText = 'background-color: #f0f0f0; padding: 2rem; border-radius: 10px; text-align: center; height: 480px; display: flex; flex-direction: column; justify-content: center; align-items: center;';
        
        fallbackContent.innerHTML = `
            <h3 class="text-xl font-bold mb-4 gradient-text">BVRIT Campus Location</h3>
            <p style="margin-bottom: 1rem;">Vishnupur, Narsapur, Medak District, Telangana 502313</p>
            <p><strong>Coordinates:</strong> 17.7252° N, 78.2546° E</p>
            <p style="margin-top: 1rem; color: #666;">Map loading blocked or unavailable. You can visit <a href="https://maps.google.com/?q=BVRIT+Narsapur" target="_blank" style="color: #0073f5; text-decoration: underline;">Google Maps</a> directly.</p>
        `;
        
        // Replace the iframe with the fallback content
        container.replaceChild(fallbackContent, iframe);
    }
    
    // Function to check if iframe loaded correctly
    function checkIframeLoaded(iframe) {
        try {
            // Try to access the iframe content
            // If blocked by CSP or other security policies, this will throw an error
            const iframeDoc = iframe.contentDocument || iframe.contentWindow.document;
            
            // If we can't access the document or it shows an error page
            if (!iframeDoc || iframeDoc.body.innerHTML.includes('error')) {
                handleMapError(iframe);
            }
        } catch (e) {
            // If we can't access the iframe due to security restrictions,
            // we don't need to do anything as the map is probably working
            console.log('Map iframe security check - iframe appears to be working');
        }
    }
});
