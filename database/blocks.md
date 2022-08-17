| type    | name                    | platform | struc    | inputs_N   | notes | upd | checked |
| ------- | ----------------------- | -------- | -------- | ---------- | ----- | --- | ------- |
| motion  | movesteps               | scratch  | sentence | 1          |       |     |         |
| motion  | turnright               | scratch  | sentence | 1          |       |     |         |
| motion  | turnleft                | scratch  | sentence | 1          |       |     |         |
| motion  | goto                    | scratch  | sentence | 1          |       |     |         |
| motion  | goto_menu               | scratch  | menu     | 1field     |       |     |         |
| motion  | gotoxy                  | scratch  | sentence | 2          |       |     |         |
| motion  | glideto                 | scratch  | sentence | 2          |       |     |         |
| motion  | glideto_menu            | scratch  | menu     | 1field     |       |     |         |
| motion  | glidesecstoxy           | scratch  | sentence | 3          |       |     |         |
| motion  | pointindirection        | scratch  | sentence | 1          |       |     |         |
| motion  | pointtowards            | scratch  | sentence | 1          |       |     |         |
| motion  | pointtowards_menu       | scratch  | menu     | 1field     |       |     |         |
| motion  | changexby               | scratch  | sentence | 1          |       |     |         |
| motion  | setx                    | scratch  | sentence | 1          |       |     |         |
| motion  | changeyby               | scratch  | sentence | 1          |       |     |         |
| motion  | sety                    | scratch  | sentence | 1          |       |     |         |
| motion  | ifonedgebounce          | scratch  | sentence | 0          |       |     |         |
| motion  | setrotationstyle        | scratch  | sentence | 1field     |       |     |         |
| motion  | xposition               | scratch  | num      | 0          |       |     |         |
| motion  | yposition               | scratch  | num      | 0          |       |     |         |
| motion  | direction               | scratch  | num      | 0          |       |     |         |
| looks   | sayforsecs              | scratch  | sentence | 2          |       |     |         |
| looks   | say                     | scratch  | sentence | 1          |       |     |         |
| looks   | thinkforsecs            | scratch  | sentence | 2          |       |     |         |
| looks   | think                   | scratch  | sentence | 1          |       |     |         |
| looks   | switchcostumeto         | scratch  | sentence | 1          |       |     |         |
| looks   | costume                 | scratch  | menu     | 1field     |       |     |         |
| looks   | nextcostume             | scratch  | sentence | 0          |       |     |         |
| looks   | switchbackdropto        | scratch  | sentence | 1          |       |     |         |
| looks   | backdrops               | scratch  | menu     | 1field     |       |     |         |
| looks   | nextbackdrop            | scratch  | sentence | 0          |       |     |         |
| looks   | changesizeby            | scratch  | sentence | 1          |       |     |         |
| looks   | setsizeto               | scratch  | sentence | 1          |       |     |         |
| looks   | changeeffectby          | scratch  | sentence | 1in+1field |       |     |         |
| looks   | seteffectto             | scratch  | sentence | 1in+1field |       |     |         |
| looks   | cleargraphiceffects     | scratch  | sentence | 0          |       |     |         |
| looks   | show                    | scratch  | sentence | 0          |       |     |         |
| looks   | hide                    | scratch  | sentence | 0          |       |     |         |
| looks   | gotofrontback           | scratch  | sentence | 1field     |       |     |         |
| looks   | goforwardbackwardlayers | scratch  | sentence | 1in+1field |       |     |         |
| looks   | costumenumbername       | scratch  | num      | 1field     |       |     |         |
| looks   | backdropnumbername      | scratch  | num      | 1field     |       |     |         |
| looks   | size                    | scratch  | num      | 0          |       |     |         |
| sound   | playuntildone           | scratch  | sentence | 1          |       |     |         |
| sound   | sounds_menu             | scratch  | menu     | 1field     |       |     |         |
| sound   | play                    | scratch  | sentence | 1          |       |     |         |
| sound   | stopallsounds           | scratch  | sentence | 0          |       |     |         |
| sound   | changeeffectby          | scratch  | sentence | 1in+1field |       |     |         |
| sound   | seteffectto             | scratch  | sentence | 1in+1field |       |     |         |
| sound   | cleareffects            | scratch  | sentence | 0          |       |     |         |
| sound   | changevolumeby          | scratch  | sentence | 1          |       |     |         |
| sound   | setvolumeto             | scratch  | sentence | 1          |       |     |         |
| sound   | volume                  | scratch  | num      | 0          |       |     |         |
| event   | whenflagclicked         | scratch  | top      | 0          |       |     |         |
| event   | whenkeypressed          | scratch  | top      | 1field     |       |     |         |
| event   | whenthisspriteclicked   | scratch  | top      | 0          |       |     |         |
| event   | whenbackdropswitchesto  | scratch  | top      | 1field     |       |     |         |
| event   | whengreaterthan         | scratch  | top      | 1in+1field |       |     |         |
| event   | whenbroadcastreceived   | scratch  | top      | 1field     |       |     |         |
| event   | broadcast               | scratch  | sentence | 1          |       |     |         |
| event   | broadcastandwait        | scratch  | sentence | 1          |       |     |         |
| control | wait                    | scratch  | sentence | 1          |       |     |         |
| control | repeat                  | scratch  | control  | 1in+1sub   |       |     |         |
| control | forever                 | scratch  | control  | 1sub       |       |     |         |
| control | if                      | scratch  | control  | 1in+1sub   |       |     |         |
| control | if_else                 | scratch  | control  | 1in+2sub   |       |     |         |
| control | wait_until              | scratch  | sentence | 1          |       |     |         |
| control | repeat_until            | scratch  | control  | 1in+1sub   |       |     |         |
| control | stop                    | scratch  | control  | 1field     |       |     |         |
| control | start_as_clone          | scratch  | top      | 0          |       |     |         |
| control | create_clone_of         | scratch  | sentence | 1          |       |     |         |
| control | create_clone_of_menu    | scratch  | menu     | 1field     |       |     |         |
| control | delete_this_clone       | scratch  | sentence | 0          |       |     |         |
| sensing | touchingobject          | scratch  | bool     | 1          |       |     |         |
| sensing | touchingobjectmenu      | scratch  | menu     | 1field     |       |     |         |
| sensing | touchingcolor           | scratch  | bool     | 1          |       |     |         |
| sensing | coloristouchingcolor    | scratch  | bool     | 2          |       |     |         |
| sensing | distanceto              | scratch  | num      | 1          |       |     |         |
| sensing | distancetomenu          | scratch  | menu     | 1field     |       |     |         |
| sensing | askandwait              | scratch  | sentence | 1          |       |     |         |
| sensing | answer                  | scratch  | num      | 0          |       |     |         |
| sensing | keypressed              | scratch  | bool     | 1          |       |     |         |
| sensing | keyoptions              | scratch  | menu     | 1field     |       |     |         |
| sensing | mousedown               | scratch  | bool     | 0          |       |     |         |
| sensing | mousex                  | scratch  | num      | 0          |       |     |         |
| sensing | mousey                  | scratch  | num      | 0          |       |     |         |
| sensing | setdragmode             | scratch  | sentence | 1field     |       |     |         |
| sensing | loudness                | scratch  | num      | 0          |       |     |         |
| sensing | timer                   | scratch  | num      | 0          |       |     |         |
| sensing | resettimer              | scratch  | sentence | 0          |       |     |         |
| sensing | of                      | scratch  | num      | 1in+1field |       |     |         |
| sensing | of_object_menu          | scratch  | menu     | 1field     |       |     |         |
| sensing | current                 | scratch  | num      | 1field     |       |     |         |
| sensing | dayssince2000           | scratch  | num      | 0          |       |     |         |
| sensing | username                | scratch  | num      | 0          |       |     |         |
| operator |                 | scratch  | num      |          |       |     |         |
| operator |                 | scratch  | num      |          |       |     |         |
| operator |                 | scratch  | num      |          |       |     |         |
| operator |                 | scratch  | num      |          |       |     |         |
| operator |                 | scratch  | num      |          |       |     |         |
| operator |                 | scratch  | num      |          |       |     |         |
| operator |                 | scratch  | num      |          |       |     |         |
| operator |                 | scratch  | num      |          |       |     |         |
| operator |                 | scratch  | num      |          |       |     |         |
| operator |                 | scratch  | num      |          |       |     |         |
| operator |                 | scratch  | num      |          |       |     |         |
| operator |                 | scratch  | num      |          |       |     |         |
| operator |                 | scratch  | num      |          |       |     |         |
| operator |                 | scratch  | num      |          |       |     |         |
| operator |                 | scratch  | num      |          |       |     |         |
| operator |                 | scratch  | num      |          |       |     |         |
| operator |                 | scratch  | num      |          |       |     |         |
| operator |                 | scratch  | num      |          |       |     |         |
