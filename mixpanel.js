//Import Mixpanel SDK
import mixpanel from "mixpanel-browser";
 
// Near entry of your product, init Mixpanel
mixpanel.init("829a6ea5b9006b1c7635d9b8a201b23b", {
  debug: true,
  track_pageview: true,
  persistence: "localStorage",
});