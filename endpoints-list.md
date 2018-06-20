
# List of all endpoints

### Device Info
GET /setup/eureka_info (1)
POST /setup/get_app_device_id (2)
GET /setup/offer (1)
POST /setup/assistant/check_ready_status (1)
GET /setup/supported_timezones (1)
GET /setup/supported_locales (1)

### Device Settings
POST /setup/set_eureka_info (1)
POST /setup/assistant/set_night_mode_params (1)
POST /setup/reboot (2)

### Assistant tasks
POST /setup/assistant/notifications (2)
POST /setup/assistant/a11y_mode (2)
GET /setup/assistant/alarms (1)
POST /setup/assistant/alarms/delete (1)
POST /setup/assistant/alarms/volume (2)
POST /setup/user_eq/set_equalizer (1)

### Multizone
POST /setup/multizone/join_group
POST /setup/multizone/leave_group?
POST /setup/multizone/disband_group

### Bluetooth
GET /setup/bluetooth/status (1)
GET /setup/bluetooth/get_bonded (1)
POST /setup/bluetooth/bond (1)
POST /setup/bluetooth/discovery (2)
POST /setup/bluetooth/scan (1)
GET /setup/bluetooth/scan_results (1)
POST /setup/bluetooth/connect (2)

### Wifi
GET /setup/configured_networks (1)
POST /setup/scan_wifi (1)
GET /setup/scan_results (1)
POST /setup/connect_wifi (1)
POST /setup/forget_wifi (1)
