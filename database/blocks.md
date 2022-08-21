# 各平台 opcode 数据

## 普通积木分类计数表

| Type         | Num |
| ------------ | --- |
| motion       | 18  |
| looks        | 20  |
| sound        | 9   |
| event        | 8   |
| control      | 11  |
| sensing      | 18  |
| operator     | 18  |
| data         | 17  |
| music        | 7   |
| pen          | 9   |
| videoSensing | 4   |
| text2speech  | 3   |
| translate    | 2   |

## opcode 数据总表

| Type         | Name                        | Platform | Struc        | Inputs_N   | Notes                                                                           | Upd |
| ------------ | --------------------------- | -------- | ------------ | ---------- | ------------------------------------------------------------------------------- | --- |
| motion       | movesteps                   | scratch  | sentence     | 1          |                                                                                 |     |
| motion       | turnright                   | scratch  | sentence     | 1          |                                                                                 |     |
| motion       | turnleft                    | scratch  | sentence     | 1          |                                                                                 |     |
| motion       | goto                        | scratch  | sentence     | 1          |                                                                                 |     |
| motion       | goto_menu                   | scratch  | menu         | 1field     |                                                                                 |     |
| motion       | gotoxy                      | scratch  | sentence     | 2          |                                                                                 |     |
| motion       | glideto                     | scratch  | sentence     | 2          |                                                                                 |     |
| motion       | glideto_menu                | scratch  | menu         | 1field     |                                                                                 |     |
| motion       | glidesecstoxy               | scratch  | sentence     | 3          |                                                                                 |     |
| motion       | pointindirection            | scratch  | sentence     | 1          |                                                                                 |     |
| motion       | pointtowards                | scratch  | sentence     | 1          |                                                                                 |     |
| motion       | pointtowards_menu           | scratch  | menu         | 1field     |                                                                                 |     |
| motion       | changexby                   | scratch  | sentence     | 1          |                                                                                 |     |
| motion       | setx                        | scratch  | sentence     | 1          |                                                                                 |     |
| motion       | changeyby                   | scratch  | sentence     | 1          |                                                                                 |     |
| motion       | sety                        | scratch  | sentence     | 1          |                                                                                 |     |
| motion       | ifonedgebounce              | scratch  | sentence     | 0          |                                                                                 |     |
| motion       | setrotationstyle            | scratch  | sentence     | 1field     |                                                                                 |     |
| motion       | xposition                   | scratch  | num          | 0          |                                                                                 |     |
| motion       | yposition                   | scratch  | num          | 0          |                                                                                 |     |
| motion       | direction                   | scratch  | num          | 0          |                                                                                 |     |
| looks        | sayforsecs                  | scratch  | sentence     | 2          |                                                                                 |     |
| looks        | say                         | scratch  | sentence     | 1          |                                                                                 |     |
| looks        | thinkforsecs                | scratch  | sentence     | 2          |                                                                                 |     |
| looks        | think                       | scratch  | sentence     | 1          |                                                                                 |     |
| looks        | switchcostumeto             | scratch  | sentence     | 1          |                                                                                 |     |
| looks        | costume                     | scratch  | menu         | 1field     |                                                                                 |     |
| looks        | nextcostume                 | scratch  | sentence     | 0          |                                                                                 |     |
| looks        | switchbackdropto            | scratch  | sentence     | 1          |                                                                                 |     |
| looks        | backdrops                   | scratch  | menu         | 1field     |                                                                                 |     |
| looks        | nextbackdrop                | scratch  | sentence     | 0          |                                                                                 |     |
| looks        | changesizeby                | scratch  | sentence     | 1          |                                                                                 |     |
| looks        | setsizeto                   | scratch  | sentence     | 1          |                                                                                 |     |
| looks        | changeeffectby              | scratch  | sentence     | 1in+1field |                                                                                 |     |
| looks        | seteffectto                 | scratch  | sentence     | 1in+1field |                                                                                 |     |
| looks        | cleargraphiceffects         | scratch  | sentence     | 0          |                                                                                 |     |
| looks        | show                        | scratch  | sentence     | 0          |                                                                                 |     |
| looks        | hide                        | scratch  | sentence     | 0          |                                                                                 |     |
| looks        | gotofrontback               | scratch  | sentence     | 1field     |                                                                                 |     |
| looks        | goforwardbackwardlayers     | scratch  | sentence     | 1in+1field |                                                                                 |     |
| looks        | costumenumbername           | scratch  | num          | 1field     |                                                                                 |     |
| looks        | backdropnumbername          | scratch  | num          | 1field     |                                                                                 |     |
| looks        | size                        | scratch  | num          | 0          |                                                                                 |     |
| sound        | playuntildone               | scratch  | sentence     | 1          |                                                                                 |     |
| sound        | sounds_menu                 | scratch  | menu         | 1field     |                                                                                 |     |
| sound        | play                        | scratch  | sentence     | 1          |                                                                                 |     |
| sound        | stopallsounds               | scratch  | sentence     | 0          |                                                                                 |     |
| sound        | changeeffectby              | scratch  | sentence     | 1in+1field |                                                                                 |     |
| sound        | seteffectto                 | scratch  | sentence     | 1in+1field |                                                                                 |     |
| sound        | cleareffects                | scratch  | sentence     | 0          |                                                                                 |     |
| sound        | changevolumeby              | scratch  | sentence     | 1          |                                                                                 |     |
| sound        | setvolumeto                 | scratch  | sentence     | 1          |                                                                                 |     |
| sound        | volume                      | scratch  | num          | 0          |                                                                                 |     |
| event        | whenflagclicked             | scratch  | top          | 0          |                                                                                 |     |
| event        | whenkeypressed              | scratch  | top          | 1field     |                                                                                 |     |
| event        | whenthisspriteclicked       | scratch  | top          | 0          |                                                                                 |     |
| event        | whenbackdropswitchesto      | scratch  | top          | 1field     |                                                                                 |     |
| event        | whengreaterthan             | scratch  | top          | 1in+1field |                                                                                 |     |
| event        | whenbroadcastreceived       | scratch  | top          | 1field     |                                                                                 |     |
| event        | broadcast                   | scratch  | sentence     | 1          |                                                                                 |     |
| event        | broadcastandwait            | scratch  | sentence     | 1          |                                                                                 |     |
| control      | wait                        | scratch  | sentence     | 1          |                                                                                 |     |
| control      | repeat                      | scratch  | cmouth       | 1in+1sub   |                                                                                 |     |
| control      | forever                     | scratch  | cmouth       | 1sub       |                                                                                 |     |
| control      | if                          | scratch  | cmouth       | 1in+1sub   |                                                                                 |     |
| control      | if_else                     | scratch  | cmouth       | 1in+2sub   |                                                                                 |     |
| control      | wait_until                  | scratch  | sentence     | 1          |                                                                                 |     |
| control      | repeat_until                | scratch  | cmouth       | 1in+1sub   |                                                                                 |     |
| control      | stop                        | scratch  | cmouth       | 1field     |                                                                                 |     |
| control      | start_as_clone              | scratch  | top          | 0          |                                                                                 |     |
| control      | create_clone_of             | scratch  | sentence     | 1          |                                                                                 |     |
| control      | create_clone_of_menu        | scratch  | menu         | 1field     |                                                                                 |     |
| control      | delete_this_clone           | scratch  | sentence     | 0          |                                                                                 |     |
| sensing      | touchingobject              | scratch  | bool         | 1          |                                                                                 |     |
| sensing      | touchingobjectmenu          | scratch  | menu         | 1field     |                                                                                 |     |
| sensing      | touchingcolor               | scratch  | bool         | 1          |                                                                                 |     |
| sensing      | coloristouchingcolor        | scratch  | bool         | 2          |                                                                                 |     |
| sensing      | distanceto                  | scratch  | num          | 1          |                                                                                 |     |
| sensing      | distancetomenu              | scratch  | menu         | 1field     |                                                                                 |     |
| sensing      | askandwait                  | scratch  | sentence     | 1          |                                                                                 |     |
| sensing      | answer                      | scratch  | num          | 0          |                                                                                 |     |
| sensing      | keypressed                  | scratch  | bool         | 1          |                                                                                 |     |
| sensing      | keyoptions                  | scratch  | menu         | 1field     |                                                                                 |     |
| sensing      | mousedown                   | scratch  | bool         | 0          |                                                                                 |     |
| sensing      | mousex                      | scratch  | num          | 0          |                                                                                 |     |
| sensing      | mousey                      | scratch  | num          | 0          |                                                                                 |     |
| sensing      | setdragmode                 | scratch  | sentence     | 1field     |                                                                                 |     |
| sensing      | loudness                    | scratch  | num          | 0          |                                                                                 |     |
| sensing      | timer                       | scratch  | num          | 0          |                                                                                 |     |
| sensing      | resettimer                  | scratch  | sentence     | 0          |                                                                                 |     |
| sensing      | of                          | scratch  | num          | 1in+1field |                                                                                 |     |
| sensing      | of_object_menu              | scratch  | menu         | 1field     |                                                                                 |     |
| sensing      | current                     | scratch  | num          | 1field     |                                                                                 |     |
| sensing      | dayssince2000               | scratch  | num          | 0          |                                                                                 |     |
| sensing      | username                    | scratch  | num          | 0          |                                                                                 |     |
| operator     | add                         | scratch  | num          | 2          |                                                                                 |     |
| operator     | subtract                    | scratch  | num          | 2          |                                                                                 |     |
| operator     | multiply                    | scratch  | num          | 2          |                                                                                 |     |
| operator     | divide                      | scratch  | num          | 2          |                                                                                 |     |
| operator     | random                      | scratch  | num          | 2          |                                                                                 |     |
| operator     | gt                          | scratch  | bool         | 2          |                                                                                 |     |
| operator     | lt                          | scratch  | bool         | 2          |                                                                                 |     |
| operator     | equals                      | scratch  | bool         | 2          |                                                                                 |     |
| operator     | and                         | scratch  | bool         | 2          |                                                                                 |     |
| operator     | or                          | scratch  | bool         | 2          |                                                                                 |     |
| operator     | not                         | scratch  | bool         | 1          |                                                                                 |     |
| operator     | join                        | scratch  | num          | 2          |                                                                                 |     |
| operator     | letter_of                   | scratch  | num          | 2          |                                                                                 |     |
| operator     | length                      | scratch  | num          | 1          |                                                                                 |     |
| operator     | contains                    | scratch  | bool         | 2          |                                                                                 |     |
| operator     | mod                         | scratch  | num          | 2          |                                                                                 |     |
| operator     | round                       | scratch  | num          | 1          |                                                                                 |     |
| operator     | mathop                      | scratch  | num          | 1in+1field |                                                                                 |     |
| data         | setvariableto               | scratch  | sentence     | 1in+1field |                                                                                 |     |
| data         | changevariableby            | scratch  | sentence     | 1in+1field |                                                                                 |     |
| data         | showvariable                | scratch  | sentence     | 1field     |                                                                                 |     |
| data         | hidevariable                | scratch  | sentence     | 1field     |                                                                                 |     |
| data         | -                           | scratch  | special-num  | -          | 单块变量/列表积木独立，作为 block 项，值为列表，无 opcode                       |     |
| data         | addtolist                   | scratch  | sentence     | 1in+1field |                                                                                 |     |
| data         | deleteoflist                | scratch  | sentence     | 1in+1field |                                                                                 |     |
| data         | deletealloflist             | scratch  | sentence     | 1field     |                                                                                 |     |
| data         | insertatlist                | scratch  | sentence     | 2in+1field |                                                                                 |     |
| data         | replaceitemoflist           | scratch  | sentence     | 2in+1field |                                                                                 |     |
| data         | itemoflist                  | scratch  | num          | 1in+1field |                                                                                 |     |
| data         | itemnumoflist               | scratch  | num          | 1in+1field |                                                                                 |     |
| data         | lengthoflist                | scratch  | num          | 1field     |                                                                                 |     |
| data         | listcontainsitem            | scratch  | bool         | 1in+1field |                                                                                 |     |
| data         | showlist                    | scratch  | sentence     | 1field     |                                                                                 |     |
| data         | hidelist                    | scratch  | sentence     | 1field     |                                                                                 |     |
| procedures   | definition                  | scratch  | top          | 1          | input 内含 prototype                                                            |     |
| procedures   | prototype                   | scratch  | special-null | N          | 不计入积木数，input 内含形参                                                    |     |
| argument     | reporter_string_number      | scratch  | special-num  | 1field     | 包含在 prototype 中的形参不计，包含在函数体中的形参统计，类型按 procedures 计。 |     |
| argument     | reporter_boolean            | scratch  | special-bool | 1field     | 规则同上                                                                        |     |
| music        | playDrumForBeats            | scratch  | sentence     | 2          |                                                                                 |     |
| music        | menu_DRUM                   | scratch  | menu         | 1field     |                                                                                 |     |
| music        | restForBeats                | scratch  | sentence     | 1          |                                                                                 |     |
| music        | playNoteForBeats            | scratch  | sentence     | 2          |                                                                                 |     |
| music        | note                        | scratch  | menu         | 1field     |                                                                                 |     |
| music        | setInstrument               | scratch  | sentence     | 1          |                                                                                 |     |
| music        | menu_INSTRUMENT             | scratch  | menu         | 1field     |                                                                                 |     |
| music        | setTempo                    | scratch  | sentence     | 1          |                                                                                 |     |
| music        | changeTempo                 | scratch  | sentence     | 1          |                                                                                 |     |
| music        | getTempo                    | scratch  | num          | 0          |                                                                                 |     |
| pen          | clear                       | scratch  | sentence     | 0          |                                                                                 |     |
| pen          | stamp                       | scratch  | sentence     | 0          |                                                                                 |     |
| pen          | penDown                     | scratch  | sentence     | 0          |                                                                                 |     |
| pen          | penUp                       | scratch  | sentence     | 0          |                                                                                 |     |
| pen          | setPenColorToColor          | scratch  | sentence     | 1          |                                                                                 |     |
| pen          | changePenColorParamBy       | scratch  | sentence     | 2          |                                                                                 |     |
| pen          | menu_colorParam             | scratch  | menu         | 1field     |                                                                                 |     |
| pen          | setPenColorParamTo          | scratch  | sentence     | 2          |                                                                                 |     |
| pen          | changePenSizeBy             | scratch  | sentence     | 1          |                                                                                 |     |
| pen          | setPenSizeTo                | scratch  | sentence     | 1          |                                                                                 |     |
| videoSensing | whenMotionGreaterThan       | scratch  | top          | 1          |                                                                                 |     |
| videoSensing | videoOn                     | scratch  | num          | 2          |                                                                                 |     |
| videoSensing | menu_ATTRIBUTE              | scratch  | menu         | 1field     |                                                                                 |     |
| videoSensing | menu_SUBJECT                | scratch  | menu         | 1field     |                                                                                 |     |
| videoSensing | videoToggle                 | scratch  | sentence     | 1          |                                                                                 |     |
| videoSensing | menu_VIDEO_STATE            | scratch  | menu         | 1field     |                                                                                 |     |
| videoSensing | setVideoTransparency        | scratch  | sentence     | 1          |                                                                                 |     |
| text2speech  | speakAndWait                | scratch  | sentence     | 1          |                                                                                 |     |
| text2speech  | setVoice                    | scratch  | sentence     | 1          |                                                                                 |     |
| text2speech  | menu_voices                 | scratch  | menu         | 1field     |                                                                                 |     |
| text2speech  | setLanguage                 | scratch  | sentence     | 1          |                                                                                 |     |
| text2speech  | menu_languages              | scratch  | sentence     | 1field     |                                                                                 |     |
| translate    | getTranslate                | scratch  | num          | 2          |                                                                                 |     |
| translate    | menu_languages              | scratch  | num          | 1field     | 子名称与 text2speech 的同名                                                     |     |
| translate    | getViewerLanguage           | scratch  | num          | 0          |                                                                                 |     |
| makeymakey   | whenMakeyKeyPressed         | scratch  | top          | 1          |                                                                                 |     |
| makeymakey   | menu_KEY                    | scratch  | menu         | 1field     |                                                                                 |     |
| makeymakey   | whenCodePressed             | scratch  | top          | 1          |                                                                                 |     |
| makeymakey   | menu_SEQUENCE               | scratch  | menu         | 1field     |                                                                                 |     |
| microbit     | whenButtonPressed           | scratch  | top          | 1          |                                                                                 |     |
| microbit     | menu_buttons                | scratch  | menu         | 1field     |                                                                                 |     |
| microbit     | isButtonPressed             | scratch  | bool         | 1          |                                                                                 |     |
| microbit     | whenGesture                 | scratch  | top          | 1          |                                                                                 |     |
| microbit     | menu_gestures               | scratch  | menu         |            |                                                                                 |     |
| microbit     | displaySymbol               | scratch  | sentence     | 1          |                                                                                 |     |
|              | matrix                      | scratch  | special-menu | 1field     | 用以表示点状图形的类 menu 操作码，无前缀                                        |     |
| microbit     | displayText                 | scratch  | sentence     | 1          |                                                                                 |     |
| microbit     | displayClear                | scratch  | sentence     | 0          |                                                                                 |     |
| microbit     | whenTilted                  | scratch  | top          | 1          |                                                                                 |     |
| microbit     | menu_tiltDirectionAny       | scratch  | menu         | 1field     |                                                                                 |     |
| microbit     | isTilted                    | scratch  | bool         | 1          |                                                                                 |     |
| microbit     | getTiltAngle                | scratch  | num          | 1          |                                                                                 |     |
| microbit     | menu_tiltDirection          | scratch  | menu         | 1field     |                                                                                 |     |
| microbit     | whenPinConnected            | scratch  | top          | 1          |                                                                                 |     |
| microbit     | menu_touchPins              | scratch  | menu         | 1field     |                                                                                 |     |
| ev3          | motorTurnClockwise          | scratch  | sentence     | 2          |                                                                                 |     |
| ev3          | menu_motorPorts             | scratch  | menu         | 1field     |                                                                                 |     |
| ev3          | motorTurnCounterClockwise   | scratch  | sentence     | 2          |                                                                                 |     |
| ev3          | motorSetPower               | scratch  | sentence     | 2          |                                                                                 |     |
| ev3          | getMotorPosition            | scratch  | num          | 1          |                                                                                 |     |
| ev3          | whenButtonPressed           | scratch  | top          | 1          |                                                                                 |     |
| ev3          | menu_sensorPorts            | scratch  | menu         | 1field     |                                                                                 |     |
| ev3          | whenDistanceLessThan        | scratch  | top          | 1          |                                                                                 |     |
| ev3          | whenBrightnessLessThan      | scratch  | top          | 1          |                                                                                 |     |
| ev3          | buttonPressed               | scratch  | bool         | 1          |                                                                                 |     |
| ev3          | getDistance                 | scratch  | num          | 0          |                                                                                 |     |
| ev3          | getBrightness               | scratch  | num          | 0          |                                                                                 |     |
| ev3          | beep                        | scratch  | sentence     | 2          |                                                                                 |     |
|              | note                        | scratch  | special-menu | 1field     | 类 menu 操作码，无前缀                                                          |     |
| boost        | motorOnFor                  | scratch  | sentence     | 2          |                                                                                 |     |
| boost        | menu_MOTOR_ID               | scratch  | menu         | 1field     |                                                                                 |     |
| boost        | motorOnForRotation          | scratch  | sentence     | 2          |                                                                                 |     |
| boost        | motorOn                     | scratch  | sentence     | 1          |                                                                                 |     |
| boost        | motorOff                    | scratch  | sentence     | 1          |                                                                                 |     |
| boost        | setMotorPower               | scratch  | sentence     | 2          |                                                                                 |     |
| boost        | setMotorDirection           | scratch  | sentence     | 2          |                                                                                 |     |
| boost        | menu_MOTOR_DIRECTION        | scratch  | menu         | 1field     |                                                                                 |     |
| boost        | getMotorPosition            | scratch  | num          | 1          |                                                                                 |     |
| boost        | menu_MOTOR_REPORTER_ID      | scratch  | menu         | 1field     |                                                                                 |     |
| boost        | whenColor                   | scratch  | top          | 1          |                                                                                 |     |
| boost        | menu_COLOR                  | scratch  | menu         | 1field     |                                                                                 |     |
| boost        | seeingColor                 | scratch  | bool         | 1          |                                                                                 |     |
| boost        | whenTilted                  | scratch  | top          | 1          |                                                                                 |     |
| boost        | menu_TILT_DIRECTION_ANY     | scratch  | menu         | 1field     |                                                                                 |     |
| boost        | getTiltAngle                | scratch  | num          | 1          |                                                                                 |     |
| boost        | menu_TILT_DIRECTION         | scratch  | menu         | 1field     |                                                                                 |     |
| boost        | setLightHue                 | scratch  | sentence     | 1          |                                                                                 |     |
| wedo2        | motorOnFor                  | scratch  | sentence     | 2          |                                                                                 |     |
| wedo2        | menu_MOTOR_ID               | scratch  | menu         | 1field     |                                                                                 |     |
| wedo2        | motorOn                     | scratch  | sentence     | 1          |                                                                                 |     |
| wedo2        | motorOff                    | scratch  | sentence     | 1          |                                                                                 |     |
| wedo2        | startMotorPower             | scratch  | sentence     | 2          |                                                                                 |     |
| wedo2        | setMotorDirection           | scratch  | sentence     | 2          |                                                                                 |     |
| wedo2        | menu_MOTOR_DIRECTION        | scratch  | menu         | 1field     |                                                                                 |     |
| wedo2        | setLightHue                 | scratch  | sentence     | 1          |                                                                                 |     |
| wedo2        | whenDistance                | scratch  | top          | 2          |                                                                                 |     |
| wedo2        | menu_OP                     | scratch  | menu         | 1field     |                                                                                 |     |
| wedo2        | whenTilted                  | scratch  | top          | 1          |                                                                                 |     |
| wedo2        | menu_TILT_DIRECTION_ANY     | scratch  | menu         | 1field     |                                                                                 |     |
| wedo2        | getDistance                 | scratch  | num          | 0          |                                                                                 |     |
| wedo2        | isTilted                    | scratch  | bool         | 1          |                                                                                 |     |
| wedo2        | getTiltAngle                | scratch  | num          | 1          |                                                                                 |     |
| wedo2        | menu_TILT_DIRECTION         | scratch  | menu         | 1field     |                                                                                 |     |
| gdxfor       | whenGesture                 | scratch  | top          | 1          |                                                                                 |     |
| gdxfor       | menu_gestureOptions         | scratch  | menu         | 1field     |                                                                                 |     |
| gdxfor       | whenForcePushedOrPulled     | scratch  | top          | 1          |                                                                                 |     |
| gdxfor       | menu_pushPullOptions        | scratch  | menu         | 1field     |                                                                                 |     |
| gdxfor       | getForce                    | scratch  | num          | 0          |                                                                                 |     |
| gdxfor       | whenTilted                  | scratch  | top          | 1          |                                                                                 |     |
| gdxfor       | menu_tiltAnyOptions         | scratch  | menu         | 1field     |                                                                                 |     |
| gdxfor       | isTilted                    | scratch  | bool         | 1          |                                                                                 |     |
| gdxfor       | getTilt                     | scratch  | num          | 1          |                                                                                 |     |
| gdxfor       | menu_tiltOptions            | scratch  | menu         | 1field     |                                                                                 |     |
| gdxfor       | isFreeFalling               | scratch  | bool         | 0          |                                                                                 |     |
| gdxfor       | getSpinSpeed                | scratch  | num          | 1          |                                                                                 |     |
| gdxfor       | menu_axisOptions            | scratch  | menu         | 1field     |                                                                                 |     |
| gdxfor       | getAcceleration             | scratch  | num          | 1          |                                                                                 |     |
| pen          | print                       | a        | sentence     | 1          |                                                                                 |     |
| pen          | setPenDownMode              | a        | sentence     | 1field     |                                                                                 |     |
| lazyAudio    | load                        | a        | sentence     | 1          |                                                                                 |     |
| lazyAudio    | playAndWait                 | a        | sentence     | 1          |                                                                                 |     |
| canvas       | beginPath                   | a        | sentence     | 0          |                                                                                 |     |
| canvas       | closePath                   | a        | sentence     | 0          |                                                                                 |     |
| canvas       | moveTo                      | a        | sentence     | 2          |                                                                                 |     |
| canvas       | lineTo                      | a        | sentence     | 2          |                                                                                 |     |
| canvas       | arc                         | a        | sentence     | 5          |                                                                                 |     |
| canvas       | rect                        | a        | sentence     | 4          |                                                                                 |     |
| canvas       | clip                        | a        | sentence     | 0          |                                                                                 |     |
| canvas       | setLineWidth                | a        | sentence     | 1          |                                                                                 |     |
| canvas       | setLineCap                  | a        | sentence     | 1          |                                                                                 |     |
| canvas       | setStrokeStyle              | a        | sentence     | 1          |                                                                                 |     |
| canvas       | setFillStyle                | a        | sentence     | 1          |                                                                                 |     |
| canvas       | stroke                      | a        | sentence     | 0          |                                                                                 |     |
| canvas       | fill                        | a        | sentence     | 0          |                                                                                 |     |
| canvas       | clearRect                   | a        | sentence     | 4          |                                                                                 |     |
| canvas       | setFont                     | a        | sentence     | 1          |                                                                                 |     |
| canvas       | strokeText                  | a        | sentence     | 3          |                                                                                 |     |
| canvas       | fillText                    | a        | sentence     | 3          |                                                                                 |     |
| canvas       | measureText                 | a        | num          | 1          |                                                                                 |     |
| canvas       | loadImage                   | a        | sentence     | 1          |                                                                                 |     |
| canvas       | drawImage                   | a        | sentence     | 3          |                                                                                 |     |
| canvas       | scale                       | a        | sentence     | 2          |                                                                                 |     |
| canvas       | rotate                      | a        | sentence     | 1          |                                                                                 |     |
| canvas       | translate                   | a        | sentence     | 2          |                                                                                 |     |
| canvas       | transform                   | a        | sentence     | 6          |                                                                                 |     |
| canvas       | clearTransform              | a        | sentence     | 0          |                                                                                 |     |
| canvas       | save                        | a        | sentence     | 0          |                                                                                 |     |
| canvas       | restore                     | a        | sentence     | 0          |                                                                                 |     |
| canvas       | setGlobalAlpha              | a        | sentence     | 1          |                                                                                 |     |
| canvas       | setGlobalCompositeOperation | a        | sentence     | 1          |                                                                                 |     |
| canvas       | switchCanvas                | a        | sentence     | 1          |                                                                                 |     |
| canvas       | stampOnStage                | a        | sentence     | 0          |                                                                                 |     |
| battle       | connect                     | a        | sentence     | 2          |                                                                                 |     |
| battle       | excute                      | a        | sentence     | 1          |                                                                                 |     |
| battle       | refresh                     | a        | sentence     | 0          |                                                                                 |     |
| battle       | getId                       | a        | num          | 0          |                                                                                 |     |
| battle       | getError                    | a        | num          | 0          |                                                                                 |     |
| battle       | getSituation                | a        | num          | 0          |                                                                                 |     |
| stringExt    | charCodeAt                  | a        | num          | 2          |                                                                                 |     |
| stringExt    | fromCharCode                | a        | num          | 1          |                                                                                 |     |
| stringExt    | serializeToJson             | a        | num          | 1          |                                                                                 |     |
| stringExt    | deserializeFromJson         | a        | sentence     | 2          |                                                                                 |     |
| stringExt    | postJson                    | a        | sentence     | 2          |                                                                                 |     |
| stringExt    | menu_urlNames               | a        | menu         | 1field     |                                                                                 |     |
| stringExt    | postResponse                | a        | num          | 0          |                                                                                 |     |
| js           | serializeToJson             | a        | num          | 1          | 除前缀外，与 stringExt 同                                                       |     |
| js           | deserializeFromJson         | a        | sentence     | 2          | 同上                                                                            |     |
| js           | postJson                    | a        | sentence     | 2          | 同上                                                                            |     |
| js           | menu_urlNames               | a        | menu         | 1field     | 同上                                                                            |     |
| js           | postResponse                | a        | num          | 0          | 同上                                                                            |     |
| js           | callWorker                  | a        | num          | 2          |                                                                                 |     |
| community    | getUserInfo                 | a        | num          | 1field     |                                                                                 |     |
| community    | isFollower                  | a        | bool         | 0          |                                                                                 |     |
| community    | isProjectLover              | a        | bool         | 0          |                                                                                 |     |
| community    | openUrl                     | a        | sentence     | 1          |                                                                                 |     |
| community    | redirectUrl                 | a        | sentence     | 1          |                                                                                 |     |
| community    | pay                         | a        | sentence     | 2          |                                                                                 |     |
| community    | getError                    | a        | num          | 0          |                                                                                 |     |
| puzzle       | convertPaintToWatermark     | a        | sentence     | 0          |                                                                                 |     |
| puzzle       | showWatermark               | a        | sentence     | 0          |                                                                                 |     |
| puzzle       | hideWatermark               | a        | sentence     | 0          |                                                                                 |     |
| puzzle       | isPaintSameAsWatermark      | a        | bool         | 0          |                                                                                 |     |
| puzzle       | attemptCount                | a        | num          | 0          |                                                                                 |     |
| puzzle       | stepInterval                | a        | num          | 0          |                                                                                 |     |
| puzzle       | setResolved                 | a        | sentence     | 1          |                                                                                 |     |
| puzzle       | setSpriteTracker            | a        | sentence     | 1          |                                                                                 |     |
| puzzle       | createReporter              | a        | sentence     | 1in+1field |                                                                                 |     |
| puzzle       | setNormalReporterValue      | a        | sentence     | 1in+1field |                                                                                 |     |
| puzzle       | normalReporter              | a        | num          | 1field     |                                                                                 |     |
| puzzle       | setBoolReporterValue        | a        | sentence     | 1in+1field | input 为可选，input 类型为 bool                                                 |     |
| puzzle       | boolReporter                | a        | sentence     | 1field     |                                                                                 |     |
| kinect       | getSensorOfPlayer           | a        | num          | 2          |                                                                                 |     |
| kinect       | menu_SENSOR                 | a        | menu         | 1field     |                                                                                 |     |
| kinect       | menu_PLAYER                 | a        | menu         | 1field     |                                                                                 |     |
