Replace styles.css and index.html in the existing application.

The central .page-shell now fills the remaining viewport beneath the header and owns a native vertical scrollbar. Previously this container had no height or overflow boundary, so scrolling belonged to the document. Root/body overflow is constrained to avoid a competing page scrollbar. Native scrollbar styling provides a visible 15px desktop track and draggable thumb in Light, OLED Dark and Colored modes. Mobile retains native touch scrolling. Sidebar behaviour and research calculations are unchanged.

Chromium tests passed: landing screen and all five primary tabs, in all three themes; actual mouse thumb dragging to the bottom of the central content, wheel scrolling and root-scroll isolation. Mobile touch swipe tested on an emulated touch-capable phone. Desktop/mobile screenshots inspected. These tests do not constitute physical-device testing. No deployment performed.
