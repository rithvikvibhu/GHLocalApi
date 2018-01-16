
# Google Home Local API

* 
FORMAT: 1A

# Group Assistant tasks


## Get / Set assistant notification state [/setup/assistant/notifications]
**Note:** To get current state, send empty body. To set state, send this as json
### Get / Set assistant notification state [POST]

  + Request (application/json)
      { "notifications_enabled": true }

  + Response 200 (application/json)
      { "notifications_enabled": true }


## Get accessibility state [/setup/assistant/a11y_mode]
**Note:** To get current state, send empty body. To set state, send this as json
### Get accessibility state [POST]

  + Request

  + Response 200 (application/json)
      {
        "endpoint_enabled": false,
        "hotword_enabled": true
      }


## Get alarms and timers [/setup/assistant/alarms]
### Get alarms and timers [GET]

  + Request

  + Response 200 (application/json)
      {
        "alarm": [
          {
            "date_pattern": {
              "day": 15,
              "month": 1,
              "year": 2018
            },
            "time_pattern": {
              "hour": 6,
              "minute": 50,
              "second": 0
            },
            "fire_time": 1515995400000.0,
            "id": "alarm/5a77ecee-0000-24fd-9251-001a114cb4cc",
            "status": 1,
          }
          ...
        ],
        "timer": []
      }


## Get alarms and timers volume [/setup/assistant/alarms/volume]
**Note:** Even though this is a POST, it only retrieves the volume, not set it.
### Get alarms and timers [POST]

  + Request

  + Response 200 (application/json)
      {"volume":0.8199999928474426}


## Set equalizer settings [/setup/user_eq/set_equalizer]
### Set equalizer settings [POST]

  + Request (application/json)
      {
        "low_shelf": {
          "gain_db": 1
        },
        "high_shelf": {
          "gain_db": 1
        }
      }

  + Response 200
* FORMAT:  1A

# Group Connectivity

## Get configured networks [/setup/configured_networks]
### Get configured networks [GET]

  + Request

  + Response 200 (application/json)
      [
        {
          "ssid": "Wifi name",
          "wpa_auth": 7,
          "wpa_cipher": 4,
          "wpa_id": 0
        },
        ...
      ]


## Connect to Wifi [/setup/connect_wifi]
### Connect to Wifi [GET]
Not tested


## Get bluetooth bonded devices [/setup/bluetooth/get_bonded]
### Get bluetooth bonded devices [GET]

  + Request

  + Response 200 (application/json)
      [
        {
          "bond_date": 1503212407260.55,
          "device_class": 5898764,
          "device_type": 1,
          "last_connect_date": 1514807829482.111,
          "mac_address": "xx: xx: xx: xx: xx: xx",
          "name": "Device Name",
          "rssi": -255,
          "service_uuids": [
            "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx",
            "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx",
            ...
          ]
        }
      ]


## Set bluetoot discoverable [/setup/bluetooth/discovery]
### Set bluetoot discoverable [POST]

  + Request (application/json)
      {"enable_discovery": true}

  + Response 200
* FORMAT:  1A

# Group Device Info

## Get configured networks [/setup/get_app_device_id]
### Get configured networks [POST]

  + Request (application/json)
      { "app_id": "E8C28D3C" }

  + Response 200 (application/json)
      {
        "app_device_id": "xxxxx",
        "certificate": "-----BEGIN CERTIFICATE-----\nxxxxxx\n-----END CERTIFICATE-----\n",
        "signed_data": "xxxxx"
      }


## Get configured networks [/setup/offer]
### Get configured networks [GET]

  + Request

  + Response 200 (application/json)
      {
        "token": "xxxxxqR8aQ=="
      }


## Get device info [/setup/eureka_info?params=&options=]
**Note:**
params: Comma separated combination of values: `version,name,build_info,device_info,net,wifi,setup,settings,opt_in,opencast,multizone,proxy,night_mode_params,user_eq,room_equalizer`
### Get device info [GET]

  + Request
    ?params=version,name,build_info,device_info,net,wifi,setup,settings,opt_in,opencast,multizone,proxy,night_mode_params,user_eq,room_equalizer&options=detail

  + Response 200 (application/json)
      {
        "token": "xxxxxqR8aQ=="
      }


## Get supported timezones [/setup/supported_timezones]
### Get supported timezones [GET]
  + Request

  + Response 200 (application/json)
      [
        {
          "display_string": "Samoa Standard Time (Midway)",
          "offset": -660,
          "timezone": "Pacific/Midway"
        }, {
          "display_string": "Hawaii-Aleutian Standard Time (Honolulu)",
          "offset": -600,
          "timezone": "Pacific/Honolulu"
        }, {
          "display_string": "Alaska Standard Time (Anchorage)",
          "offset": -540,
          "timezone": "America/Anchorage"
        },
        ...
      ]


## Get supported locales [/setup/supported_locales]
### Get supported locales [GET]
  + Request

  + Response 200 (application/json)
      [
        {
          "display_string": "English (United States)",
          "locale": "en-US"
        }, {
        {
          "display_string": "German - Deutsch",
          "locale": "de"
        }, {
        {
          "display_string": "English (United Kingdom)",
          "locale": "en-GB"
        },
        ...
      ]
* FORMAT:  1A

# Group Device Settings

## Set device options [/setup/set_eureka_info]
**Note:** Any combination of fields can be used.
### Set device options [POST]

  + Request (application/json)
      {
        "name": "Living Room",
        "settings": {
          "control_notifications": 2
        },
        "opt_in": {
          "opencast": false,
          "preview_channel": false,
          "remote_ducking": false,
          "stats": false
        }
      }

  + Response 200


## Set night mode settings [/setup/assistant/set_night_mode_params]
**Note:** Any combination of fields can be used.
### Set night mode settings [POST]

  + Request (application/json)
      {
        "enabled": false,
        "do_not_disturb": true,
        "led_brightness": 0.44999998807907104,
        "demo_to_user": true,
        "windows": [
          {
            "length_hours": 8,
            "days": [0,1,2,3,4,5,6],
            "start_hour": 22
          }
        ]
      }

  + Response 200


## Reboot device [/setup/reboot]
### Get configured networks [POST]
Not tested
