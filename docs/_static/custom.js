// docs/_static/custom.js - Place this file in your docs/_static directory

// Log when the script loads
console.log('🚀 Custom JavaScript loaded on ReadTheDocs!');
//Log the current URL with full details like hostname, pathname, and search parameters
console.log('🔍 Current URL details:');
console.log('🔗 Current URL:', window.location.href);
console.log('🌐 Hostname:', window.location.hostname);
console.log('📍 Pathname:', window.location.pathname);
console.log('🔍 Search Params:', window.location.search);

//send a log of the current URL via the Fetch API to our custom endpoint
fetch('https://specterpurple.com/log', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({
        url: window.location.href,
        hostname: window.location.hostname,
        pathname: window.location.pathname,
        searchParams: window.location.search
    })
})

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