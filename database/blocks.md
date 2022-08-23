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

| Type         | Name                        | Platform | Struc        | Inputs_N   | Notes                                                                           | Reviewed |
| ------------ | --------------------------- | -------- | ------------ | ---------- | ------------------------------------------------------------------------------- | -------- |
| motion       | movesteps                   | sc       | sentence     | 1          |                                                                                 |          |
| motion       | turnright                   | sc       | sentence     | 1          |                                                                                 |          |
| motion       | turnleft                    | sc       | sentence     | 1          |                                                                                 |          |
| motion       | goto                        | sc       | sentence     | 1          |                                                                                 |          |
| motion       | goto_menu                   | sc       | menu         | 1field     |                                                                                 |          |
| motion       | gotoxy                      | sc       | sentence     | 2          |                                                                                 |          |
| motion       | glideto                     | sc       | sentence     | 2          |                                                                                 |          |
| motion       | glideto_menu                | sc       | menu         | 1field     |                                                                                 |          |
| motion       | glidesecstoxy               | sc       | sentence     | 3          |                                                                                 |          |
| motion       | pointindirection            | sc       | sentence     | 1          |                                                                                 |          |
| motion       | pointtowards                | sc       | sentence     | 1          |                                                                                 |          |
| motion       | pointtowards_menu           | sc       | menu         | 1field     |                                                                                 |          |
| motion       | changexby                   | sc       | sentence     | 1          |                                                                                 |          |
| motion       | setx                        | sc       | sentence     | 1          |                                                                                 |          |
| motion       | changeyby                   | sc       | sentence     | 1          |                                                                                 |          |
| motion       | sety                        | sc       | sentence     | 1          |                                                                                 |          |
| motion       | ifonedgebounce              | sc       | sentence     | 0          |                                                                                 |          |
| motion       | setrotationstyle            | sc       | sentence     | 1field     |                                                                                 |          |
| motion       | xposition                   | sc       | num          | 0          |                                                                                 |          |
| motion       | yposition                   | sc       | num          | 0          |                                                                                 |          |
| motion       | direction                   | sc       | num          | 0          |                                                                                 |          |
| looks        | sayforsecs                  | sc       | sentence     | 2          |                                                                                 |          |
| looks        | say                         | sc       | sentence     | 1          |                                                                                 |          |
| looks        | thinkforsecs                | sc       | sentence     | 2          |                                                                                 |          |
| looks        | think                       | sc       | sentence     | 1          |                                                                                 |          |
| looks        | switchcostumeto             | sc       | sentence     | 1          |                                                                                 |          |
| looks        | costume                     | sc       | menu         | 1field     |                                                                                 |          |
| looks        | nextcostume                 | sc       | sentence     | 0          |                                                                                 |          |
| looks        | switchbackdropto            | sc       | sentence     | 1          |                                                                                 |          |
| looks        | backdrops                   | sc       | menu         | 1field     |                                                                                 |          |
| looks        | nextbackdrop                | sc       | sentence     | 0          |                                                                                 |          |
| looks        | changesizeby                | sc       | sentence     | 1          |                                                                                 |          |
| looks        | setsizeto                   | sc       | sentence     | 1          |                                                                                 |          |
| looks        | changeeffectby              | sc       | sentence     | 1in+1field |                                                                                 |          |
| looks        | seteffectto                 | sc       | sentence     | 1in+1field |                                                                                 |          |
| looks        | cleargraphiceffects         | sc       | sentence     | 0          |                                                                                 |          |
| looks        | show                        | sc       | sentence     | 0          |                                                                                 |          |
| looks        | hide                        | sc       | sentence     | 0          |                                                                                 |          |
| looks        | gotofrontback               | sc       | sentence     | 1field     |                                                                                 |          |
| looks        | goforwardbackwardlayers     | sc       | sentence     | 1in+1field |                                                                                 |          |
| looks        | costumenumbername           | sc       | num          | 1field     |                                                                                 |          |
| looks        | backdropnumbername          | sc       | num          | 1field     |                                                                                 |          |
| looks        | size                        | sc       | num          | 0          |                                                                                 |          |
| sound        | playuntildone               | sc       | sentence     | 1          |                                                                                 |          |
| sound        | sounds_menu                 | sc       | menu         | 1field     |                                                                                 |          |
| sound        | play                        | sc       | sentence     | 1          |                                                                                 |          |
| sound        | stopallsounds               | sc       | sentence     | 0          |                                                                                 |          |
| sound        | changeeffectby              | sc       | sentence     | 1in+1field |                                                                                 |          |
| sound        | seteffectto                 | sc       | sentence     | 1in+1field |                                                                                 |          |
| sound        | cleareffects                | sc       | sentence     | 0          |                                                                                 |          |
| sound        | changevolumeby              | sc       | sentence     | 1          |                                                                                 |          |
| sound        | setvolumeto                 | sc       | sentence     | 1          |                                                                                 |          |
| sound        | volume                      | sc       | num          | 0          |                                                                                 |          |
| event        | whenflagclicked             | sc       | top          | 0          |                                                                                 |          |
| event        | whenkeypressed              | sc       | top          | 1field     |                                                                                 |          |
| event        | whenthisspriteclicked       | sc       | top          | 0          |                                                                                 |          |
| event        | whenbackdropswitchesto      | sc       | top          | 1field     |                                                                                 |          |
| event        | whengreaterthan             | sc       | top          | 1in+1field |                                                                                 |          |
| event        | whenbroadcastreceived       | sc       | top          | 1field     |                                                                                 |          |
| event        | broadcast                   | sc       | sentence     | 1          |                                                                                 |          |
| event        | broadcastandwait            | sc       | sentence     | 1          |                                                                                 |          |
| control      | wait                        | sc       | sentence     | 1          |                                                                                 |          |
| control      | repeat                      | sc       | cmouth       | 1in+1sub   |                                                                                 |          |
| control      | forever                     | sc       | cmouth       | 1sub       |                                                                                 |          |
| control      | if                          | sc       | cmouth       | 1in+1sub   |                                                                                 |          |
| control      | if_else                     | sc       | cmouth       | 1in+2sub   |                                                                                 |          |
| control      | wait_until                  | sc       | sentence     | 1          |                                                                                 |          |
| control      | repeat_until                | sc       | cmouth       | 1in+1sub   |                                                                                 |          |
| control      | stop                        | sc       | cmouth       | 1field     |                                                                                 |          |
| control      | start_as_clone              | sc       | top          | 0          |                                                                                 |          |
| control      | create_clone_of             | sc       | sentence     | 1          |                                                                                 |          |
| control      | create_clone_of_menu        | sc       | menu         | 1field     |                                                                                 |          |
| control      | delete_this_clone           | sc       | sentence     | 0          |                                                                                 |          |
| sensing      | touchingobject              | sc       | bool         | 1          |                                                                                 |          |
| sensing      | touchingobjectmenu          | sc       | menu         | 1field     |                                                                                 |          |
| sensing      | touchingcolor               | sc       | bool         | 1          |                                                                                 |          |
| sensing      | coloristouchingcolor        | sc       | bool         | 2          |                                                                                 |          |
| sensing      | distanceto                  | sc       | num          | 1          |                                                                                 |          |
| sensing      | distancetomenu              | sc       | menu         | 1field     |                                                                                 |          |
| sensing      | askandwait                  | sc       | sentence     | 1          |                                                                                 |          |
| sensing      | answer                      | sc       | num          | 0          |                                                                                 |          |
| sensing      | keypressed                  | sc       | bool         | 1          |                                                                                 |          |
| sensing      | keyoptions                  | sc       | menu         | 1field     |                                                                                 |          |
| sensing      | mousedown                   | sc       | bool         | 0          |                                                                                 |          |
| sensing      | mousex                      | sc       | num          | 0          |                                                                                 |          |
| sensing      | mousey                      | sc       | num          | 0          |                                                                                 |          |
| sensing      | setdragmode                 | sc       | sentence     | 1field     |                                                                                 |          |
| sensing      | loudness                    | sc       | num          | 0          |                                                                                 |          |
| sensing      | timer                       | sc       | num          | 0          |                                                                                 |          |
| sensing      | resettimer                  | sc       | sentence     | 0          |                                                                                 |          |
| sensing      | of                          | sc       | num          | 1in+1field |                                                                                 |          |
| sensing      | of_object_menu              | sc       | menu         | 1field     |                                                                                 |          |
| sensing      | current                     | sc       | num          | 1field     |                                                                                 |          |
| sensing      | dayssince2000               | sc       | num          | 0          |                                                                                 |          |
| sensing      | username                    | sc       | num          | 0          |                                                                                 |          |
| operator     | add                         | sc       | num          | 2          |                                                                                 |          |
| operator     | subtract                    | sc       | num          | 2          |                                                                                 |          |
| operator     | multiply                    | sc       | num          | 2          |                                                                                 |          |
| operator     | divide                      | sc       | num          | 2          |                                                                                 |          |
| operator     | random                      | sc       | num          | 2          |                                                                                 |          |
| operator     | gt                          | sc       | bool         | 2          |                                                                                 |          |
| operator     | lt                          | sc       | bool         | 2          |                                                                                 |          |
| operator     | equals                      | sc       | bool         | 2          |                                                                                 |          |
| operator     | and                         | sc       | bool         | 2          |                                                                                 |          |
| operator     | or                          | sc       | bool         | 2          |                                                                                 |          |
| operator     | not                         | sc       | bool         | 1          |                                                                                 |          |
| operator     | join                        | sc       | num          | 2          |                                                                                 |          |
| operator     | letter_of                   | sc       | num          | 2          |                                                                                 |          |
| operator     | length                      | sc       | num          | 1          |                                                                                 |          |
| operator     | contains                    | sc       | bool         | 2          |                                                                                 |          |
| operator     | mod                         | sc       | num          | 2          |                                                                                 |          |
| operator     | round                       | sc       | num          | 1          |                                                                                 |          |
| operator     | mathop                      | sc       | num          | 1in+1field |                                                                                 |          |
| data         | setvariableto               | sc       | sentence     | 1in+1field |                                                                                 |          |
| data         | changevariableby            | sc       | sentence     | 1in+1field |                                                                                 |          |
| data         | showvariable                | sc       | sentence     | 1field     |                                                                                 |          |
| data         | hidevariable                | sc       | sentence     | 1field     |                                                                                 |          |
| data         | -                           | sc       | special-num  | -          | 单块变量/列表积木独立，作为 block 项，值为列表，无 opcode                       |          |
| data         | addtolist                   | sc       | sentence     | 1in+1field |                                                                                 |          |
| data         | deleteoflist                | sc       | sentence     | 1in+1field |                                                                                 |          |
| data         | deletealloflist             | sc       | sentence     | 1field     |                                                                                 |          |
| data         | insertatlist                | sc       | sentence     | 2in+1field |                                                                                 |          |
| data         | replaceitemoflist           | sc       | sentence     | 2in+1field |                                                                                 |          |
| data         | itemoflist                  | sc       | num          | 1in+1field |                                                                                 |          |
| data         | itemnumoflist               | sc       | num          | 1in+1field |                                                                                 |          |
| data         | lengthoflist                | sc       | num          | 1field     |                                                                                 |          |
| data         | listcontainsitem            | sc       | bool         | 1in+1field |                                                                                 |          |
| data         | showlist                    | sc       | sentence     | 1field     |                                                                                 |          |
| data         | hidelist                    | sc       | sentence     | 1field     |                                                                                 |          |
| procedures   | definition                  | sc       | top          | 1          | input 内含 prototype                                                            |          |
| procedures   | prototype                   | sc       | special-null | N          | 不计入积木数，input 内含形参                                                    |          |
| argument     | reporter_string_number      | sc       | special-num  | 1field     | 包含在 prototype 中的形参不计，包含在函数体中的形参统计，类型按 procedures 计。 |          |
| argument     | reporter_boolean            | sc       | special-bool | 1field     | 规则同上                                                                        |          |
| music        | playDrumForBeats            | sc       | sentence     | 2          |                                                                                 |          |
| music        | menu_DRUM                   | sc       | menu         | 1field     |                                                                                 |          |
| music        | restForBeats                | sc       | sentence     | 1          |                                                                                 |          |
| music        | playNoteForBeats            | sc       | sentence     | 2          |                                                                                 |          |
| music        | note                        | sc       | menu         | 1field     |                                                                                 |          |
| music        | setInstrument               | sc       | sentence     | 1          |                                                                                 |          |
| music        | menu_INSTRUMENT             | sc       | menu         | 1field     |                                                                                 |          |
| music        | setTempo                    | sc       | sentence     | 1          |                                                                                 |          |
| music        | changeTempo                 | sc       | sentence     | 1          |                                                                                 |          |
| music        | getTempo                    | sc       | num          | 0          |                                                                                 |          |
| pen          | clear                       | sc       | sentence     | 0          |                                                                                 |          |
| pen          | stamp                       | sc       | sentence     | 0          |                                                                                 |          |
| pen          | penDown                     | sc       | sentence     | 0          |                                                                                 |          |
| pen          | penUp                       | sc       | sentence     | 0          |                                                                                 |          |
| pen          | setPenColorToColor          | sc       | sentence     | 1          |                                                                                 |          |
| pen          | changePenColorParamBy       | sc       | sentence     | 2          |                                                                                 |          |
| pen          | menu_colorParam             | sc       | menu         | 1field     |                                                                                 |          |
| pen          | setPenColorParamTo          | sc       | sentence     | 2          |                                                                                 |          |
| pen          | changePenSizeBy             | sc       | sentence     | 1          |                                                                                 |          |
| pen          | setPenSizeTo                | sc       | sentence     | 1          |                                                                                 |          |
| videoSensing | whenMotionGreaterThan       | sc       | top          | 1          |                                                                                 |          |
| videoSensing | videoOn                     | sc       | num          | 2          |                                                                                 |          |
| videoSensing | menu_ATTRIBUTE              | sc       | menu         | 1field     |                                                                                 |          |
| videoSensing | menu_SUBJECT                | sc       | menu         | 1field     |                                                                                 |          |
| videoSensing | videoToggle                 | sc       | sentence     | 1          |                                                                                 |          |
| videoSensing | menu_VIDEO_STATE            | sc       | menu         | 1field     |                                                                                 |          |
| videoSensing | setVideoTransparency        | sc       | sentence     | 1          |                                                                                 |          |
| text2speech  | speakAndWait                | sc       | sentence     | 1          |                                                                                 |          |
| text2speech  | setVoice                    | sc       | sentence     | 1          |                                                                                 |          |
| text2speech  | menu_voices                 | sc       | menu         | 1field     |                                                                                 |          |
| text2speech  | setLanguage                 | sc       | sentence     | 1          |                                                                                 |          |
| text2speech  | menu_languages              | sc       | sentence     | 1field     |                                                                                 |          |
| translate    | getTranslate                | sc       | num          | 2          |                                                                                 |          |
| translate    | menu_languages              | sc       | num          | 1field     | 子名称与 text2speech 的同名                                                     |          |
| translate    | getViewerLanguage           | sc       | num          | 0          |                                                                                 |          |
| makeymakey   | whenMakeyKeyPressed         | sc       | top          | 1          |                                                                                 |          |
| makeymakey   | menu_KEY                    | sc       | menu         | 1field     |                                                                                 |          |
| makeymakey   | whenCodePressed             | sc       | top          | 1          |                                                                                 |          |
| makeymakey   | menu_SEQUENCE               | sc       | menu         | 1field     |                                                                                 |          |
| microbit     | whenButtonPressed           | sc       | top          | 1          |                                                                                 |          |
| microbit     | menu_buttons                | sc       | menu         | 1field     |                                                                                 |          |
| microbit     | isButtonPressed             | sc       | bool         | 1          |                                                                                 |          |
| microbit     | whenGesture                 | sc       | top          | 1          |                                                                                 |          |
| microbit     | menu_gestures               | sc       | menu         |            |                                                                                 |          |
| microbit     | displaySymbol               | sc       | sentence     | 1          |                                                                                 |          |
|              | matrix                      | sc       | special-menu | 1field     | 用以表示点状图形的类 menu 操作码，无前缀                                        |          |
| microbit     | displayText                 | sc       | sentence     | 1          |                                                                                 |          |
| microbit     | displayClear                | sc       | sentence     | 0          |                                                                                 |          |
| microbit     | whenTilted                  | sc       | top          | 1          |                                                                                 |          |
| microbit     | menu_tiltDirectionAny       | sc       | menu         | 1field     |                                                                                 |          |
| microbit     | isTilted                    | sc       | bool         | 1          |                                                                                 |          |
| microbit     | getTiltAngle                | sc       | num          | 1          |                                                                                 |          |
| microbit     | menu_tiltDirection          | sc       | menu         | 1field     |                                                                                 |          |
| microbit     | whenPinConnected            | sc       | top          | 1          |                                                                                 |          |
| microbit     | menu_touchPins              | sc       | menu         | 1field     |                                                                                 |          |
| ev3          | motorTurnClockwise          | sc       | sentence     | 2          |                                                                                 |          |
| ev3          | menu_motorPorts             | sc       | menu         | 1field     |                                                                                 |          |
| ev3          | motorTurnCounterClockwise   | sc       | sentence     | 2          |                                                                                 |          |
| ev3          | motorSetPower               | sc       | sentence     | 2          |                                                                                 |          |
| ev3          | getMotorPosition            | sc       | num          | 1          |                                                                                 |          |
| ev3          | whenButtonPressed           | sc       | top          | 1          |                                                                                 |          |
| ev3          | menu_sensorPorts            | sc       | menu         | 1field     |                                                                                 |          |
| ev3          | whenDistanceLessThan        | sc       | top          | 1          |                                                                                 |          |
| ev3          | whenBrightnessLessThan      | sc       | top          | 1          |                                                                                 |          |
| ev3          | buttonPressed               | sc       | bool         | 1          |                                                                                 |          |
| ev3          | getDistance                 | sc       | num          | 0          |                                                                                 |          |
| ev3          | getBrightness               | sc       | num          | 0          |                                                                                 |          |
| ev3          | beep                        | sc       | sentence     | 2          |                                                                                 |          |
|              | note                        | sc       | special-menu | 1field     | 类 menu 操作码，无前缀                                                          |          |
| boost        | motorOnFor                  | sc       | sentence     | 2          |                                                                                 |          |
| boost        | menu_MOTOR_ID               | sc       | menu         | 1field     |                                                                                 |          |
| boost        | motorOnForRotation          | sc       | sentence     | 2          |                                                                                 |          |
| boost        | motorOn                     | sc       | sentence     | 1          |                                                                                 |          |
| boost        | motorOff                    | sc       | sentence     | 1          |                                                                                 |          |
| boost        | setMotorPower               | sc       | sentence     | 2          |                                                                                 |          |
| boost        | setMotorDirection           | sc       | sentence     | 2          |                                                                                 |          |
| boost        | menu_MOTOR_DIRECTION        | sc       | menu         | 1field     |                                                                                 |          |
| boost        | getMotorPosition            | sc       | num          | 1          |                                                                                 |          |
| boost        | menu_MOTOR_REPORTER_ID      | sc       | menu         | 1field     |                                                                                 |          |
| boost        | whenColor                   | sc       | top          | 1          |                                                                                 |          |
| boost        | menu_COLOR                  | sc       | menu         | 1field     |                                                                                 |          |
| boost        | seeingColor                 | sc       | bool         | 1          |                                                                                 |          |
| boost        | whenTilted                  | sc       | top          | 1          |                                                                                 |          |
| boost        | menu_TILT_DIRECTION_ANY     | sc       | menu         | 1field     |                                                                                 |          |
| boost        | getTiltAngle                | sc       | num          | 1          |                                                                                 |          |
| boost        | menu_TILT_DIRECTION         | sc       | menu         | 1field     |                                                                                 |          |
| boost        | setLightHue                 | sc       | sentence     | 1          |                                                                                 |          |
| wedo2        | motorOnFor                  | sc       | sentence     | 2          |                                                                                 |          |
| wedo2        | menu_MOTOR_ID               | sc       | menu         | 1field     |                                                                                 |          |
| wedo2        | motorOn                     | sc       | sentence     | 1          |                                                                                 |          |
| wedo2        | motorOff                    | sc       | sentence     | 1          |                                                                                 |          |
| wedo2        | startMotorPower             | sc       | sentence     | 2          |                                                                                 |          |
| wedo2        | setMotorDirection           | sc       | sentence     | 2          |                                                                                 |          |
| wedo2        | menu_MOTOR_DIRECTION        | sc       | menu         | 1field     |                                                                                 |          |
| wedo2        | setLightHue                 | sc       | sentence     | 1          |                                                                                 |          |
| wedo2        | whenDistance                | sc       | top          | 2          |                                                                                 |          |
| wedo2        | menu_OP                     | sc       | menu         | 1field     |                                                                                 |          |
| wedo2        | whenTilted                  | sc       | top          | 1          |                                                                                 |          |
| wedo2        | menu_TILT_DIRECTION_ANY     | sc       | menu         | 1field     |                                                                                 |          |
| wedo2        | getDistance                 | sc       | num          | 0          |                                                                                 |          |
| wedo2        | isTilted                    | sc       | bool         | 1          |                                                                                 |          |
| wedo2        | getTiltAngle                | sc       | num          | 1          |                                                                                 |          |
| wedo2        | menu_TILT_DIRECTION         | sc       | menu         | 1field     |                                                                                 |          |
| gdxfor       | whenGesture                 | sc       | top          | 1          |                                                                                 |          |
| gdxfor       | menu_gestureOptions         | sc       | menu         | 1field     |                                                                                 |          |
| gdxfor       | whenForcePushedOrPulled     | sc       | top          | 1          |                                                                                 |          |
| gdxfor       | menu_pushPullOptions        | sc       | menu         | 1field     |                                                                                 |          |
| gdxfor       | getForce                    | sc       | num          | 0          |                                                                                 |          |
| gdxfor       | whenTilted                  | sc       | top          | 1          |                                                                                 |          |
| gdxfor       | menu_tiltAnyOptions         | sc       | menu         | 1field     |                                                                                 |          |
| gdxfor       | isTilted                    | sc       | bool         | 1          |                                                                                 |          |
| gdxfor       | getTilt                     | sc       | num          | 1          |                                                                                 |          |
| gdxfor       | menu_tiltOptions            | sc       | menu         | 1field     |                                                                                 |          |
| gdxfor       | isFreeFalling               | sc       | bool         | 0          |                                                                                 |          |
| gdxfor       | getSpinSpeed                | sc       | num          | 1          |                                                                                 |          |
| gdxfor       | menu_axisOptions            | sc       | menu         | 1field     |                                                                                 |          |
| gdxfor       | getAcceleration             | sc       | num          | 1          |                                                                                 |          |
| pen          | print                       | a        | sentence     | 1          |                                                                                 |          |
| pen          | setPenDownMode              | a        | sentence     | 1field     |                                                                                 |          |
| lazyAudio    | load                        | a        | sentence     | 1          |                                                                                 |          |
| lazyAudio    | playAndWait                 | a        | sentence     | 1          |                                                                                 |          |
| canvas       | beginPath                   | a        | sentence     | 0          |                                                                                 |          |
| canvas       | closePath                   | a        | sentence     | 0          |                                                                                 |          |
| canvas       | moveTo                      | a        | sentence     | 2          |                                                                                 |          |
| canvas       | lineTo                      | a        | sentence     | 2          |                                                                                 |          |
| canvas       | arc                         | a        | sentence     | 5          |                                                                                 |          |
| canvas       | rect                        | a        | sentence     | 4          |                                                                                 |          |
| canvas       | clip                        | a        | sentence     | 0          |                                                                                 |          |
| canvas       | setLineWidth                | a        | sentence     | 1          |                                                                                 |          |
| canvas       | setLineCap                  | a        | sentence     | 1          |                                                                                 |          |
| canvas       | setStrokeStyle              | a        | sentence     | 1          |                                                                                 |          |
| canvas       | setFillStyle                | a        | sentence     | 1          |                                                                                 |          |
| canvas       | stroke                      | a        | sentence     | 0          |                                                                                 |          |
| canvas       | fill                        | a        | sentence     | 0          |                                                                                 |          |
| canvas       | clearRect                   | a        | sentence     | 4          |                                                                                 |          |
| canvas       | setFont                     | a        | sentence     | 1          |                                                                                 |          |
| canvas       | strokeText                  | a        | sentence     | 3          |                                                                                 |          |
| canvas       | fillText                    | a        | sentence     | 3          |                                                                                 |          |
| canvas       | measureText                 | a        | num          | 1          |                                                                                 |          |
| canvas       | loadImage                   | a        | sentence     | 1          |                                                                                 |          |
| canvas       | drawImage                   | a        | sentence     | 3          |                                                                                 |          |
| canvas       | scale                       | a        | sentence     | 2          |                                                                                 |          |
| canvas       | rotate                      | a        | sentence     | 1          |                                                                                 |          |
| canvas       | translate                   | a        | sentence     | 2          |                                                                                 |          |
| canvas       | transform                   | a        | sentence     | 6          |                                                                                 |          |
| canvas       | clearTransform              | a        | sentence     | 0          |                                                                                 |          |
| canvas       | save                        | a        | sentence     | 0          |                                                                                 |          |
| canvas       | restore                     | a        | sentence     | 0          |                                                                                 |          |
| canvas       | setGlobalAlpha              | a        | sentence     | 1          |                                                                                 |          |
| canvas       | setGlobalCompositeOperation | a        | sentence     | 1          |                                                                                 |          |
| canvas       | switchCanvas                | a        | sentence     | 1          |                                                                                 |          |
| canvas       | stampOnStage                | a        | sentence     | 0          |                                                                                 |          |
| battle       | connect                     | a        | sentence     | 2          |                                                                                 |          |
| battle       | excute                      | a        | sentence     | 1          |                                                                                 |          |
| battle       | refresh                     | a        | sentence     | 0          |                                                                                 |          |
| battle       | getId                       | a        | num          | 0          |                                                                                 |          |
| battle       | getError                    | a        | num          | 0          |                                                                                 |          |
| battle       | getSituation                | a        | num          | 0          |                                                                                 |          |
| stringExt    | charCodeAt                  | a        | num          | 2          |                                                                                 |          |
| stringExt    | fromCharCode                | a        | num          | 1          |                                                                                 |          |
| stringExt    | serializeToJson             | a        | num          | 1          |                                                                                 |          |
| stringExt    | deserializeFromJson         | a        | sentence     | 2          |                                                                                 |          |
| stringExt    | postJson                    | a        | sentence     | 2          |                                                                                 |          |
| stringExt    | menu_urlNames               | a        | menu         | 1field     |                                                                                 |          |
| stringExt    | postResponse                | a        | num          | 0          |                                                                                 |          |
| js           | serializeToJson             | a        | num          | 1          | 除前缀外，与 stringExt 同                                                       |          |
| js           | deserializeFromJson         | a        | sentence     | 2          | 同上                                                                            |          |
| js           | postJson                    | a        | sentence     | 2          | 同上                                                                            |          |
| js           | menu_urlNames               | a        | menu         | 1field     | 同上                                                                            |          |
| js           | postResponse                | a        | num          | 0          | 同上                                                                            |          |
| js           | callWorker                  | a        | num          | 2          |                                                                                 |          |
| community    | getUserInfo                 | a        | num          | 1field     |                                                                                 |          |
| community    | isFollower                  | a        | bool         | 0          |                                                                                 |          |
| community    | isProjectLover              | a        | bool         | 0          |                                                                                 |          |
| community    | openUrl                     | a        | sentence     | 1          |                                                                                 |          |
| community    | redirectUrl                 | a        | sentence     | 1          |                                                                                 |          |
| community    | pay                         | a        | sentence     | 2          |                                                                                 |          |
| community    | getError                    | a        | num          | 0          |                                                                                 |          |
| puzzle       | convertPaintToWatermark     | a        | sentence     | 0          |                                                                                 |          |
| puzzle       | showWatermark               | a        | sentence     | 0          |                                                                                 |          |
| puzzle       | hideWatermark               | a        | sentence     | 0          |                                                                                 |          |
| puzzle       | isPaintSameAsWatermark      | a        | bool         | 0          |                                                                                 |          |
| puzzle       | attemptCount                | a        | num          | 0          |                                                                                 |          |
| puzzle       | stepInterval                | a        | num          | 0          |                                                                                 |          |
| puzzle       | setResolved                 | a        | sentence     | 1          |                                                                                 |          |
| puzzle       | setSpriteTracker            | a        | sentence     | 1          |                                                                                 |          |
| puzzle       | createReporter              | a        | sentence     | 1in+1field |                                                                                 |          |
| puzzle       | setNormalReporterValue      | a        | sentence     | 1in+1field |                                                                                 |          |
| puzzle       | normalReporter              | a        | num          | 1field     |                                                                                 |          |
| puzzle       | setBoolReporterValue        | a        | sentence     | 1in+1field | input 为可选，input 类型为 bool                                                 |          |
| puzzle       | boolReporter                | a        | sentence     | 1field     |                                                                                 |          |
| kinect       | getSensorOfPlayer           | a        | num          | 2          |                                                                                 |          |
| kinect       | menu_SENSOR                 | a        | menu         | 1field     |                                                                                 |          |
| kinect       | menu_PLAYER                 | a        | menu         | 1field     |                                                                                 |          |
| data         | loadvariable                | a        | sentence     | 2field     |                                                                                 |          |
| data         | savevariable                | a        | sentence     | 2field     |                                                                                 |          |
| data         | loadlist                    | a        | sentence     | 2field     |                                                                                 |          |
| data         | savelist                    | a        | sentence     | 2field     |                                                                                 |          |
| sensing      | userid                      | xmw      | num          | 0          |                                                                                 |          |
| xiaoma       | getXiaomaUserInfo           | xmw      | num          | 1field     |                                                                                 |          |
| xiaoma       | xiaomaPurchase              | xmw      | sentence     | 2          |                                                                                 |          |
| sccn         | jituiTotal                  | cn       | bool         | 1          | bool 型积木，但没有 is 前缀                                                     |          |
| sccn         | jituiTotalGT                | cn       | bool         | 1          | 同上                                                                            |          |
| sccnvip      | getPlayerNickname           | cn       | num          | 0          |                                                                                 |          |
| sccnvip      | saveUserInfo                | cn       | sentence     | 2          |                                                                                 |          |
| sccnvip      | getUserList                 | cn       | sentence     | 2          |                                                                                 |          |
| sccnvip      | menu_DRUM                   | cn       | menu         | 1field     |                                                                                 |          |
| sccnvip      | menu_PER                    | cn       | menu         | 1field     |                                                                                 |          |
| sccnvip      | jsonChange                  | cn       | num          | 2          |                                                                                 |          |
