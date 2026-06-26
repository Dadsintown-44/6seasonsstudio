'use client';

import { useEffect } from 'react';

export default function RemoveElfsightBranding() {
  useEffect(() => {
    const removeBranding = () => {
      // Remove Elfsight links
      const links = document.querySelectorAll('a[href*="elfsight.com"]');
      links.forEach((link) => {
        link.remove();
      });

      // Remove Elfsight tooltips and wrappers
      const tooltips = document.querySelectorAll('.es-tooltip-container, .eapps-widget-toolbar, div[data-radix-popper-content-wrapper]');
      tooltips.forEach((tooltip) => {
        // Make sure we only remove Radix poppers that contain Elfsight content
        if (tooltip.hasAttribute('data-radix-popper-content-wrapper')) {
          if (tooltip.querySelector('.es-tooltip-container') || tooltip.innerHTML.includes('Elfsight')) {
            tooltip.remove();
          }
        } else {
          tooltip.remove();
        }
      });
    };

    // Run once immediately
    removeBranding();

    // Set up an observer to catch elements as they are dynamically injected
    const observer = new MutationObserver(() => {
      removeBranding();
    });

    observer.observe(document.body, {
      childList: true,
      subtree: true,
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  return null;
}
