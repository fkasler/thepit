// docs/_static/custom.js - Place this file in your docs/_static directory

// Log when the script loads
console.log('🚀 Custom JavaScript loaded on ReadTheDocs!');

// Log some page information
console.log('📄 Current page URL:', window.location.href);
console.log('📖 Page title:', document.title);

// Wait for DOM to be ready, then log more info
document.addEventListener('DOMContentLoaded', function() {
    console.log('✅ DOM Content Loaded');
    
    // Log some page structure info
    const headers = document.querySelectorAll('h1, h2, h3');
    console.log(`📝 Found ${headers.length} headers on this page:`);
    
    headers.forEach((header, index) => {
        console.log(`  ${index + 1}. ${header.tagName}: ${header.textContent.trim()}`);
    });
    
    // Log if we're on ReadTheDocs
    if (window.location.hostname.includes('readthedocs')) {
        console.log('🏠 This page is hosted on ReadTheDocs');
    }
    
    // Log ReadTheDocs theme info if available
    const themeElements = document.querySelectorAll('[class*="rst-"], [class*="rtd-"]');
    if (themeElements.length > 0) {
        console.log('🎨 ReadTheDocs theme detected');
    }
});

// Log when page is fully loaded (including images, etc.)
window.addEventListener('load', function() {
    console.log('🏁 Page fully loaded');
    console.log('⏱️  Load time:', performance.now().toFixed(2) + 'ms');
});