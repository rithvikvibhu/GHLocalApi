
# List of all endpoints

### Bluetooth and Wifi
GET /setup/bluetooth/get_bonded
POST /setup/bluetooth/discovery
GET /setup/configured_networks
/setup/connect_wifi

### Device Info
POST /setup/get_app_device_id
GET /setup/offer
GET /setup/eureka_info
POST /setup/assistant/a11y_mode
GET /setup/supported_timezones
GET /setup/supported_locales

### Device Settings
POST /setup/set_eureka_info
POST /setup/assistant/set_night_mode_params
/setup/reboot

### Alarms, Timers and Volume
GET /setup/assistant/alarms
POST /setup/assistant/alarms/volume
POST /setup/user_eq/set_equalizer

### Others
POST /setup/assistant/notifications
