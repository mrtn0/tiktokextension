{
  "manifest_version": 3,
  "name": "Remove Query Parameters",
  "version": "1.0",
  "description": "Entfernt alle Zeichen nach dem ? von der aktuellen URL.",
  "permissions": ["tabs"],
  "host_permissions": ["<all_urls>"],
  "background": {
    "service_worker": "background.js"
  },
  "action": {
    "default_title": "Query entfernen"
  }
}
