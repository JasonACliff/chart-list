import style from './styles/root.css'
import style1 from './scripts/chart/chart.css'
import style2 from './scripts/data-capture/data.capture.css'
import style3 from './scripts/list-view/list.view.css'
import style4 from './scripts/main/main.css'


import * as dataCapture from './scripts/data-capture/data.capture'
import * as main from './scripts/main/main'

dataCapture.primePump()
main.start(document.getElementById('container'))