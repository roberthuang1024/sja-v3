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

| Type             | Name                        | Platform | Struc        | Notes                                                                           | Reviewed |
| ---------------- | --------------------------- | -------- | ------------ | ------------------------------------------------------------------------------- | -------- |
| motion           | movesteps                   | sc       | sentence     |                                                                                 |          |
| motion           | turnright                   | sc       | sentence     |                                                                                 |          |
| motion           | turnleft                    | sc       | sentence     |                                                                                 |          |
| motion           | goto                        | sc       | sentence     |                                                                                 |          |
| motion           | goto_menu                   | sc       | menu         |                                                                                 |          |
| motion           | gotoxy                      | sc       | sentence     |                                                                                 |          |
| motion           | glideto                     | sc       | sentence     |                                                                                 |          |
| motion           | glideto_menu                | sc       | menu         |                                                                                 |          |
| motion           | glidesecstoxy               | sc       | sentence     |                                                                                 |          |
| motion           | pointindirection            | sc       | sentence     |                                                                                 |          |
| motion           | pointtowards                | sc       | sentence     |                                                                                 |          |
| motion           | pointtowards_menu           | sc       | menu         |                                                                                 |          |
| motion           | changexby                   | sc       | sentence     |                                                                                 |          |
| motion           | setx                        | sc       | sentence     |                                                                                 |          |
| motion           | changeyby                   | sc       | sentence     |                                                                                 |          |
| motion           | sety                        | sc       | sentence     |                                                                                 |          |
| motion           | ifonedgebounce              | sc       | sentence     |                                                                                 |          |
| motion           | setrotationstyle            | sc       | sentence     |                                                                                 |          |
| motion           | xposition                   | sc       | num          |                                                                                 |          |
| motion           | yposition                   | sc       | num          |                                                                                 |          |
| motion           | direction                   | sc       | num          |                                                                                 |          |
| looks            | sayforsecs                  | sc       | sentence     |                                                                                 |          |
| looks            | say                         | sc       | sentence     |                                                                                 |          |
| looks            | thinkforsecs                | sc       | sentence     |                                                                                 |          |
| looks            | think                       | sc       | sentence     |                                                                                 |          |
| looks            | switchcostumeto             | sc       | sentence     |                                                                                 |          |
| looks            | costume                     | sc       | menu         |                                                                                 |          |
| looks            | nextcostume                 | sc       | sentence     |                                                                                 |          |
| looks            | switchbackdropto            | sc       | sentence     |                                                                                 |          |
| looks            | backdrops                   | sc       | menu         |                                                                                 |          |
| looks            | nextbackdrop                | sc       | sentence     |                                                                                 |          |
| looks            | changesizeby                | sc       | sentence     |                                                                                 |          |
| looks            | setsizeto                   | sc       | sentence     |                                                                                 |          |
| looks            | changeeffectby              | sc       | sentence     |                                                                                 |          |
| looks            | seteffectto                 | sc       | sentence     |                                                                                 |          |
| looks            | cleargraphiceffects         | sc       | sentence     |                                                                                 |          |
| looks            | show                        | sc       | sentence     |                                                                                 |          |
| looks            | hide                        | sc       | sentence     |                                                                                 |          |
| looks            | gotofrontback               | sc       | sentence     |                                                                                 |          |
| looks            | goforwardbackwardlayers     | sc       | sentence     |                                                                                 |          |
| looks            | costumenumbername           | sc       | num          |                                                                                 |          |
| looks            | backdropnumbername          | sc       | num          |                                                                                 |          |
| looks            | size                        | sc       | num          |                                                                                 |          |
| sound            | playuntildone               | sc       | sentence     |                                                                                 |          |
| sound            | sounds_menu                 | sc       | menu         |                                                                                 |          |
| sound            | play                        | sc       | sentence     |                                                                                 |          |
| sound            | stopallsounds               | sc       | sentence     |                                                                                 |          |
| sound            | changeeffectby              | sc       | sentence     |                                                                                 |          |
| sound            | seteffectto                 | sc       | sentence     |                                                                                 |          |
| sound            | cleareffects                | sc       | sentence     |                                                                                 |          |
| sound            | changevolumeby              | sc       | sentence     |                                                                                 |          |
| sound            | setvolumeto                 | sc       | sentence     |                                                                                 |          |
| sound            | volume                      | sc       | num          |                                                                                 |          |
| event            | whenflagclicked             | sc       | top          |                                                                                 |          |
| event            | whenkeypressed              | sc       | top          |                                                                                 |          |
| event            | whenthisspriteclicked       | sc       | top          |                                                                                 |          |
| event            | whenbackdropswitchesto      | sc       | top          |                                                                                 |          |
| event            | whengreaterthan             | sc       | top          |                                                                                 |          |
| event            | whenbroadcastreceived       | sc       | top          |                                                                                 |          |
| event            | broadcast                   | sc       | sentence     |                                                                                 |          |
| event            | broadcastandwait            | sc       | sentence     |                                                                                 |          |
| control          | wait                        | sc       | sentence     |                                                                                 |          |
| control          | repeat                      | sc       | cmouth       |                                                                                 |          |
| control          | forever                     | sc       | cmouth       |                                                                                 |          |
| control          | if                          | sc       | cmouth       |                                                                                 |          |
| control          | if_else                     | sc       | cmouth       |                                                                                 |          |
| control          | wait_until                  | sc       | sentence     |                                                                                 |          |
| control          | repeat_until                | sc       | cmouth       |                                                                                 |          |
| control          | stop                        | sc       | cmouth       |                                                                                 |          |
| control          | start_as_clone              | sc       | top          |                                                                                 |          |
| control          | create_clone_of             | sc       | sentence     |                                                                                 |          |
| control          | create_clone_of_menu        | sc       | menu         |                                                                                 |          |
| control          | delete_this_clone           | sc       | sentence     |                                                                                 |          |
| sensing          | touchingobject              | sc       | bool         |                                                                                 |          |
| sensing          | touchingobjectmenu          | sc       | menu         |                                                                                 |          |
| sensing          | touchingcolor               | sc       | bool         |                                                                                 |          |
| sensing          | coloristouchingcolor        | sc       | bool         |                                                                                 |          |
| sensing          | distanceto                  | sc       | num          |                                                                                 |          |
| sensing          | distancetomenu              | sc       | menu         |                                                                                 |          |
| sensing          | askandwait                  | sc       | sentence     |                                                                                 |          |
| sensing          | answer                      | sc       | num          |                                                                                 |          |
| sensing          | keypressed                  | sc       | bool         |                                                                                 |          |
| sensing          | keyoptions                  | sc       | menu         |                                                                                 |          |
| sensing          | mousedown                   | sc       | bool         |                                                                                 |          |
| sensing          | mousex                      | sc       | num          |                                                                                 |          |
| sensing          | mousey                      | sc       | num          |                                                                                 |          |
| sensing          | setdragmode                 | sc       | sentence     |                                                                                 |          |
| sensing          | loudness                    | sc       | num          |                                                                                 |          |
| sensing          | timer                       | sc       | num          |                                                                                 |          |
| sensing          | resettimer                  | sc       | sentence     |                                                                                 |          |
| sensing          | of                          | sc       | num          |                                                                                 |          |
| sensing          | of_object_menu              | sc       | menu         |                                                                                 |          |
| sensing          | current                     | sc       | num          |                                                                                 |          |
| sensing          | dayssince2000               | sc       | num          |                                                                                 |          |
| sensing          | username                    | sc       | num          |                                                                                 |          |
| operator         | add                         | sc       | num          |                                                                                 |          |
| operator         | subtract                    | sc       | num          |                                                                                 |          |
| operator         | multiply                    | sc       | num          |                                                                                 |          |
| operator         | divide                      | sc       | num          |                                                                                 |          |
| operator         | random                      | sc       | num          |                                                                                 |          |
| operator         | gt                          | sc       | bool         |                                                                                 |          |
| operator         | lt                          | sc       | bool         |                                                                                 |          |
| operator         | equals                      | sc       | bool         |                                                                                 |          |
| operator         | and                         | sc       | bool         |                                                                                 |          |
| operator         | or                          | sc       | bool         |                                                                                 |          |
| operator         | not                         | sc       | bool         |                                                                                 |          |
| operator         | join                        | sc       | num          |                                                                                 |          |
| operator         | letter_of                   | sc       | num          |                                                                                 |          |
| operator         | length                      | sc       | num          |                                                                                 |          |
| operator         | contains                    | sc       | bool         |                                                                                 |          |
| operator         | mod                         | sc       | num          |                                                                                 |          |
| operator         | round                       | sc       | num          |                                                                                 |          |
| operator         | mathop                      | sc       | num          |                                                                                 |          |
| data             | setvariableto               | sc       | sentence     |                                                                                 |          |
| data             | changevariableby            | sc       | sentence     |                                                                                 |          |
| data             | showvariable                | sc       | sentence     |                                                                                 |          |
| data             | hidevariable                | sc       | sentence     |                                                                                 |          |
| data             | -                           | sc       | special-num  | 单块变量/列表积木独立，作为 block 项，值为列表，无 opcode                       |          |
| data             | addtolist                   | sc       | sentence     |                                                                                 |          |
| data             | deleteoflist                | sc       | sentence     |                                                                                 |          |
| data             | deletealloflist             | sc       | sentence     |                                                                                 |          |
| data             | insertatlist                | sc       | sentence     |                                                                                 |          |
| data             | replaceitemoflist           | sc       | sentence     |                                                                                 |          |
| data             | itemoflist                  | sc       | num          |                                                                                 |          |
| data             | itemnumoflist               | sc       | num          |                                                                                 |          |
| data             | lengthoflist                | sc       | num          |                                                                                 |          |
| data             | listcontainsitem            | sc       | bool         |                                                                                 |          |
| data             | showlist                    | sc       | sentence     |                                                                                 |          |
| data             | hidelist                    | sc       | sentence     |                                                                                 |          |
| procedures       | definition                  | sc       | top          | input 内含 prototype                                                            |          |
| procedures       | prototype                   | sc       | special-null | 不计入积木数，input 内含形参                                                    |          |
| argument         | reporter_string_number      | sc       | special-num  | 包含在 prototype 中的形参不计，包含在函数体中的形参统计，类型按 procedures 计。 |          |
| argument         | reporter_boolean            | sc       | special-bool | 规则同上                                                                        |          |
| music            | playDrumForBeats            | sc       | sentence     |                                                                                 |          |
| music            | menu_DRUM                   | sc       | menu         |                                                                                 |          |
| music            | restForBeats                | sc       | sentence     |                                                                                 |          |
| music            | playNoteForBeats            | sc       | sentence     |                                                                                 |          |
| music            | note                        | sc       | menu         |                                                                                 |          |
| music            | setInstrument               | sc       | sentence     |                                                                                 |          |
| music            | menu_INSTRUMENT             | sc       | menu         |                                                                                 |          |
| music            | setTempo                    | sc       | sentence     |                                                                                 |          |
| music            | changeTempo                 | sc       | sentence     |                                                                                 |          |
| music            | getTempo                    | sc       | num          |                                                                                 |          |
| pen              | clear                       | sc       | sentence     |                                                                                 |          |
| pen              | stamp                       | sc       | sentence     |                                                                                 |          |
| pen              | penDown                     | sc       | sentence     |                                                                                 |          |
| pen              | penUp                       | sc       | sentence     |                                                                                 |          |
| pen              | setPenColorToColor          | sc       | sentence     |                                                                                 |          |
| pen              | changePenColorParamBy       | sc       | sentence     |                                                                                 |          |
| pen              | menu_colorParam             | sc       | menu         |                                                                                 |          |
| pen              | setPenColorParamTo          | sc       | sentence     |                                                                                 |          |
| pen              | changePenSizeBy             | sc       | sentence     |                                                                                 |          |
| pen              | setPenSizeTo                | sc       | sentence     |                                                                                 |          |
| videoSensing     | whenMotionGreaterThan       | sc       | top          |                                                                                 |          |
| videoSensing     | videoOn                     | sc       | num          |                                                                                 |          |
| videoSensing     | menu_ATTRIBUTE              | sc       | menu         |                                                                                 |          |
| videoSensing     | menu_SUBJECT                | sc       | menu         |                                                                                 |          |
| videoSensing     | videoToggle                 | sc       | sentence     |                                                                                 |          |
| videoSensing     | menu_VIDEO_STATE            | sc       | menu         |                                                                                 |          |
| videoSensing     | setVideoTransparency        | sc       | sentence     |                                                                                 |          |
| text2speech      | speakAndWait                | sc       | sentence     |                                                                                 |          |
| text2speech      | setVoice                    | sc       | sentence     |                                                                                 |          |
| text2speech      | menu_voices                 | sc       | menu         |                                                                                 |          |
| text2speech      | setLanguage                 | sc       | sentence     |                                                                                 |          |
| text2speech      | menu_languages              | sc       | sentence     |                                                                                 |          |
| translate        | getTranslate                | sc       | num          |                                                                                 |          |
| translate        | menu_languages              | sc       | num          | 子名称与 text2speech 的同名                                                     |          |
| translate        | getViewerLanguage           | sc       | num          |                                                                                 |          |
| makeymakey       | whenMakeyKeyPressed         | sc       | top          |                                                                                 |          |
| makeymakey       | menu_KEY                    | sc       | menu         |                                                                                 |          |
| makeymakey       | whenCodePressed             | sc       | top          |                                                                                 |          |
| makeymakey       | menu_SEQUENCE               | sc       | menu         |                                                                                 |          |
| microbit         | whenButtonPressed           | sc       | top          |                                                                                 |          |
| microbit         | menu_buttons                | sc       | menu         |                                                                                 |          |
| microbit         | isButtonPressed             | sc       | bool         |                                                                                 |          |
| microbit         | whenGesture                 | sc       | top          |                                                                                 |          |
| microbit         | menu_gestures               | sc       | menu         |                                                                                 |          |
| microbit         | displaySymbol               | sc       | sentence     |                                                                                 |          |
|                  | matrix                      | sc       | special-menu | 用以表示点状图形的类 menu 操作码，无前缀                                        |          |
| microbit         | displayText                 | sc       | sentence     |                                                                                 |          |
| microbit         | displayClear                | sc       | sentence     |                                                                                 |          |
| microbit         | whenTilted                  | sc       | top          |                                                                                 |          |
| microbit         | menu_tiltDirectionAny       | sc       | menu         |                                                                                 |          |
| microbit         | isTilted                    | sc       | bool         |                                                                                 |          |
| microbit         | getTiltAngle                | sc       | num          |                                                                                 |          |
| microbit         | menu_tiltDirection          | sc       | menu         |                                                                                 |          |
| microbit         | whenPinConnected            | sc       | top          |                                                                                 |          |
| microbit         | menu_touchPins              | sc       | menu         |                                                                                 |          |
| ev3              | motorTurnClockwise          | sc       | sentence     |                                                                                 |          |
| ev3              | menu_motorPorts             | sc       | menu         |                                                                                 |          |
| ev3              | motorTurnCounterClockwise   | sc       | sentence     |                                                                                 |          |
| ev3              | motorSetPower               | sc       | sentence     |                                                                                 |          |
| ev3              | getMotorPosition            | sc       | num          |                                                                                 |          |
| ev3              | whenButtonPressed           | sc       | top          |                                                                                 |          |
| ev3              | menu_sensorPorts            | sc       | menu         |                                                                                 |          |
| ev3              | whenDistanceLessThan        | sc       | top          |                                                                                 |          |
| ev3              | whenBrightnessLessThan      | sc       | top          |                                                                                 |          |
| ev3              | buttonPressed               | sc       | bool         |                                                                                 |          |
| ev3              | getDistance                 | sc       | num          |                                                                                 |          |
| ev3              | getBrightness               | sc       | num          |                                                                                 |          |
| ev3              | beep                        | sc       | sentence     |                                                                                 |          |
|                  | note                        | sc       | special-menu | 类 menu 操作码，无前缀                                                          |          |
| boost            | motorOnFor                  | sc       | sentence     |                                                                                 |          |
| boost            | menu_MOTOR_ID               | sc       | menu         |                                                                                 |          |
| boost            | motorOnForRotation          | sc       | sentence     |                                                                                 |          |
| boost            | motorOn                     | sc       | sentence     |                                                                                 |          |
| boost            | motorOff                    | sc       | sentence     |                                                                                 |          |
| boost            | setMotorPower               | sc       | sentence     |                                                                                 |          |
| boost            | setMotorDirection           | sc       | sentence     |                                                                                 |          |
| boost            | menu_MOTOR_DIRECTION        | sc       | menu         |                                                                                 |          |
| boost            | getMotorPosition            | sc       | num          |                                                                                 |          |
| boost            | menu_MOTOR_REPORTER_ID      | sc       | menu         |                                                                                 |          |
| boost            | whenColor                   | sc       | top          |                                                                                 |          |
| boost            | menu_COLOR                  | sc       | menu         |                                                                                 |          |
| boost            | seeingColor                 | sc       | bool         |                                                                                 |          |
| boost            | whenTilted                  | sc       | top          |                                                                                 |          |
| boost            | menu_TILT_DIRECTION_ANY     | sc       | menu         |                                                                                 |          |
| boost            | getTiltAngle                | sc       | num          |                                                                                 |          |
| boost            | menu_TILT_DIRECTION         | sc       | menu         |                                                                                 |          |
| boost            | setLightHue                 | sc       | sentence     |                                                                                 |          |
| wedo2            | motorOnFor                  | sc       | sentence     |                                                                                 |          |
| wedo2            | menu_MOTOR_ID               | sc       | menu         |                                                                                 |          |
| wedo2            | motorOn                     | sc       | sentence     |                                                                                 |          |
| wedo2            | motorOff                    | sc       | sentence     |                                                                                 |          |
| wedo2            | startMotorPower             | sc       | sentence     |                                                                                 |          |
| wedo2            | setMotorDirection           | sc       | sentence     |                                                                                 |          |
| wedo2            | menu_MOTOR_DIRECTION        | sc       | menu         |                                                                                 |          |
| wedo2            | setLightHue                 | sc       | sentence     |                                                                                 |          |
| wedo2            | whenDistance                | sc       | top          |                                                                                 |          |
| wedo2            | menu_OP                     | sc       | menu         |                                                                                 |          |
| wedo2            | whenTilted                  | sc       | top          |                                                                                 |          |
| wedo2            | menu_TILT_DIRECTION_ANY     | sc       | menu         |                                                                                 |          |
| wedo2            | getDistance                 | sc       | num          |                                                                                 |          |
| wedo2            | isTilted                    | sc       | bool         |                                                                                 |          |
| wedo2            | getTiltAngle                | sc       | num          |                                                                                 |          |
| wedo2            | menu_TILT_DIRECTION         | sc       | menu         |                                                                                 |          |
| gdxfor           | whenGesture                 | sc       | top          |                                                                                 |          |
| gdxfor           | menu_gestureOptions         | sc       | menu         |                                                                                 |          |
| gdxfor           | whenForcePushedOrPulled     | sc       | top          |                                                                                 |          |
| gdxfor           | menu_pushPullOptions        | sc       | menu         |                                                                                 |          |
| gdxfor           | getForce                    | sc       | num          |                                                                                 |          |
| gdxfor           | whenTilted                  | sc       | top          |                                                                                 |          |
| gdxfor           | menu_tiltAnyOptions         | sc       | menu         |                                                                                 |          |
| gdxfor           | isTilted                    | sc       | bool         |                                                                                 |          |
| gdxfor           | getTilt                     | sc       | num          |                                                                                 |          |
| gdxfor           | menu_tiltOptions            | sc       | menu         |                                                                                 |          |
| gdxfor           | isFreeFalling               | sc       | bool         |                                                                                 |          |
| gdxfor           | getSpinSpeed                | sc       | num          |                                                                                 |          |
| gdxfor           | menu_axisOptions            | sc       | menu         |                                                                                 |          |
| gdxfor           | getAcceleration             | sc       | num          |                                                                                 |          |
| pen              | print                       | a        | sentence     |                                                                                 |          |
| pen              | setPenDownMode              | a        | sentence     |                                                                                 |          |
| lazyAudio        | load                        | a        | sentence     |                                                                                 |          |
| lazyAudio        | playAndWait                 | a        | sentence     |                                                                                 |          |
| canvas           | beginPath                   | a        | sentence     |                                                                                 |          |
| canvas           | closePath                   | a        | sentence     |                                                                                 |          |
| canvas           | moveTo                      | a        | sentence     |                                                                                 |          |
| canvas           | lineTo                      | a        | sentence     |                                                                                 |          |
| canvas           | arc                         | a        | sentence     |                                                                                 |          |
| canvas           | rect                        | a        | sentence     |                                                                                 |          |
| canvas           | clip                        | a        | sentence     |                                                                                 |          |
| canvas           | setLineWidth                | a        | sentence     |                                                                                 |          |
| canvas           | setLineCap                  | a        | sentence     |                                                                                 |          |
| canvas           | setStrokeStyle              | a        | sentence     |                                                                                 |          |
| canvas           | setFillStyle                | a        | sentence     |                                                                                 |          |
| canvas           | stroke                      | a        | sentence     |                                                                                 |          |
| canvas           | fill                        | a        | sentence     |                                                                                 |          |
| canvas           | clearRect                   | a        | sentence     |                                                                                 |          |
| canvas           | setFont                     | a        | sentence     |                                                                                 |          |
| canvas           | strokeText                  | a        | sentence     |                                                                                 |          |
| canvas           | fillText                    | a        | sentence     |                                                                                 |          |
| canvas           | measureText                 | a        | num          |                                                                                 |          |
| canvas           | loadImage                   | a        | sentence     |                                                                                 |          |
| canvas           | drawImage                   | a        | sentence     |                                                                                 |          |
| canvas           | scale                       | a        | sentence     |                                                                                 |          |
| canvas           | rotate                      | a        | sentence     |                                                                                 |          |
| canvas           | translate                   | a        | sentence     |                                                                                 |          |
| canvas           | transform                   | a        | sentence     |                                                                                 |          |
| canvas           | clearTransform              | a        | sentence     |                                                                                 |          |
| canvas           | save                        | a        | sentence     |                                                                                 |          |
| canvas           | restore                     | a        | sentence     |                                                                                 |          |
| canvas           | setGlobalAlpha              | a        | sentence     |                                                                                 |          |
| canvas           | setGlobalCompositeOperation | a        | sentence     |                                                                                 |          |
| canvas           | switchCanvas                | a        | sentence     |                                                                                 |          |
| canvas           | stampOnStage                | a        | sentence     |                                                                                 |          |
| battle           | connect                     | a        | sentence     |                                                                                 |          |
| battle           | excute                      | a        | sentence     |                                                                                 |          |
| battle           | refresh                     | a        | sentence     |                                                                                 |          |
| battle           | getId                       | a        | num          |                                                                                 |          |
| battle           | getError                    | a        | num          |                                                                                 |          |
| battle           | getSituation                | a        | num          |                                                                                 |          |
| stringExt        | charCodeAt                  | a        | num          |                                                                                 |          |
| stringExt        | fromCharCode                | a        | num          |                                                                                 |          |
| stringExt        | serializeToJson             | a        | num          |                                                                                 |          |
| stringExt        | deserializeFromJson         | a        | sentence     |                                                                                 |          |
| stringExt        | postJson                    | a        | sentence     |                                                                                 |          |
| stringExt        | menu_urlNames               | a        | menu         |                                                                                 |          |
| stringExt        | postResponse                | a        | num          |                                                                                 |          |
| js               | serializeToJson             | a        | num          | 除前缀外，与 stringExt 同                                                       |          |
| js               | deserializeFromJson         | a        | sentence     | 同上                                                                            |          |
| js               | postJson                    | a        | sentence     | 同上                                                                            |          |
| js               | menu_urlNames               | a        | menu         | 同上                                                                            |          |
| js               | postResponse                | a        | num          | 同上                                                                            |          |
| js               | callWorker                  | a        | num          |                                                                                 |          |
| community        | getUserInfo                 | a        | num          |                                                                                 |          |
| community        | isFollower                  | a        | bool         |                                                                                 |          |
| community        | isProjectLover              | a        | bool         |                                                                                 |          |
| community        | openUrl                     | a        | sentence     |                                                                                 |          |
| community        | redirectUrl                 | a        | sentence     |                                                                                 |          |
| community        | pay                         | a        | sentence     |                                                                                 |          |
| community        | getError                    | a        | num          |                                                                                 |          |
| puzzle           | convertPaintToWatermark     | a        | sentence     |                                                                                 |          |
| puzzle           | showWatermark               | a        | sentence     |                                                                                 |          |
| puzzle           | hideWatermark               | a        | sentence     |                                                                                 |          |
| puzzle           | isPaintSameAsWatermark      | a        | bool         |                                                                                 |          |
| puzzle           | attemptCount                | a        | num          |                                                                                 |          |
| puzzle           | stepInterval                | a        | num          |                                                                                 |          |
| puzzle           | setResolved                 | a        | sentence     |                                                                                 |          |
| puzzle           | setSpriteTracker            | a        | sentence     |                                                                                 |          |
| puzzle           | createReporter              | a        | sentence     |                                                                                 |          |
| puzzle           | setNormalReporterValue      | a        | sentence     |                                                                                 |          |
| puzzle           | normalReporter              | a        | num          |                                                                                 |          |
| puzzle           | setBoolReporterValue        | a        | sentence     | input 为可选，input 类型为 bool                                                 |          |
| puzzle           | boolReporter                | a        | sentence     |                                                                                 |          |
| kinect           | getSensorOfPlayer           | a        | num          |                                                                                 |          |
| kinect           | menu_SENSOR                 | a        | menu         |                                                                                 |          |
| kinect           | menu_PLAYER                 | a        | menu         |                                                                                 |          |
| data             | loadvariable                | a        | sentence     |                                                                                 |          |
| data             | savevariable                | a        | sentence     |                                                                                 |          |
| data             | loadlist                    | a        | sentence     |                                                                                 |          |
| data             | savelist                    | a        | sentence     |                                                                                 |          |
| sensing          | userid                      | xmw      | num          |                                                                                 |          |
| xiaoma           | getXiaomaUserInfo           | xmw      | num          |                                                                                 |          |
| xiaoma           | xiaomaPurchase              | xmw      | sentence     |                                                                                 |          |
| sccn             | jituiTotal                  | cn       | bool         | bool 型积木，但没有 is 前缀                                                     |          |
| sccn             | jituiTotalGT                | cn       | bool         | 同上                                                                            |          |
| sccnvip          | getPlayerNickname           | cn       | num          |                                                                                 |          |
| sccnvip          | saveUserInfo                | cn       | sentence     |                                                                                 |          |
| sccnvip          | getUserList                 | cn       | sentence     |                                                                                 |          |
| sccnvip          | menu_DRUM                   | cn       | menu         |                                                                                 |          |
| sccnvip          | menu_PER                    | cn       | menu         |                                                                                 |          |
| sccnvip          | jsonChange                  | cn       | num          |                                                                                 |          |
| ArkosArchiveCode | init                        | ccw      | sentence     |                                                                                 |          |
