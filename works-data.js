/* One entry per type of work. Edit the text freely.
   The pictures in images/ are illustrations I made, not photos of real projects. Replace them with your own photos when you have them.
   To add your own photo or video, add a line inside that work's media list, like this:
     {type:"photo",src:"images/my-door.jpg",caption:"Sectional door, Peelamedu"},
     {type:"video",src:"https://www.youtube.com/watch?v=XXXXXXXX",caption:"Installation walk-through"},
   Photo and video files uploaded to your repository go in the folders images/ and videos/. */
var WORKS=[
{slug:"garage-doors",form:"Garage or sectional doors",title:"Garage and sectional doors",
 short:"Design, production and installation of garage doors and sectional doors.",
 description:"A garage or sectional door is more than panels on a track. It has to fit the opening exactly, balance properly and open smoothly for years. We take the measurements, design the door, make it and fit it, so you deal with one contact from the drawing to the finished door.\n\nSectional doors suit homes, shops and workshops because they lift up along the ceiling and leave the driveway free. We can also combine the door with remote or phone control, so it opens at the press of a button.",
 canDo:["Site measurement of the opening, headroom and side room","Design drawing of the door and its track layout","Production of garage and sectional doors","Installation and adjustment at your site","Remote, button or phone control of the door","Linking the door with gate or home automation"],
 media:[
  {type:"photo",src:"images/garage-doors.svg",caption:"Illustration: a sectional door lifting along its track"}
 ]},
{slug:"3d-modeling",form:"3D modeling",title:"3D modeling",
 short:"Accurate 3D parts and assemblies, ready for review, rendering or manufacturing.",
 description:"A good 3D model lets you see and check a part before anything is made. We build parts and assemblies in SolidWorks, Creo, CATIA and AutoCAD, with the dimensions and fits worked out properly.\n\nModels can be used to review a design with your team, to produce clear renderings, or as the starting point for drawings and manufacturing. We can also build a model from a sketch, a photo or a sample part you already have.",
 canDo:["Single part and full assembly models","Models from sketches, photos or sample parts","Checks on fit and clearances between parts","Renderings for presentations and approvals","Files exported for manufacturing","Updates to models you already have"],
 media:[
  {type:"photo",src:"images/3d-modeling.svg",caption:"Illustration: a 3D solid model shown as a wireframe"}
 ]},
{slug:"design",form:"Design",title:"Design",
 short:"Product and mechanical design that is practical to build.",
 description:"Design is where an idea becomes something a workshop can actually make. We think about materials, strength, assembly and cost along with how the product looks and works.\n\nYou get drawings and models that are clear enough to hand to a fabricator or manufacturer, and we revise them with you until the design is right.",
 canDo:["Concept ideas and mechanical design","Detailed 2D drawings and 3D models","Design reviews and revisions with you","Drawings ready for a workshop or fabricator","Redesign of existing parts to improve them"],
 media:[
  {type:"photo",src:"images/design.svg",caption:"Illustration: a dimensioned part drawing"}
 ]},
{slug:"cad-automation",form:"CAD automation",title:"CAD automation",
 short:"Tools that generate drawings, variants and BOMs automatically.",
 description:"Many design teams redraw similar parts again and again, or type BOM lists by hand. That is slow, and mistakes creep in. We write tools that do this work for you inside your CAD software.\n\nFor example, a tool can create a drawing from a few inputs, produce part variants, or generate the bill of materials automatically. Your engineers spend their time on design instead of routine drawing work.",
 canDo:["Automatic BOM generation from your models or drawings","AutoCAD automation for repeated drawings","Drawing templates and automatic title blocks","Part variants made from a few inputs","Batch processing of many files at once","Simple checks that catch drawing errors early"],
 media:[
  {type:"photo",src:"images/cad-automation.svg",caption:"Illustration: a drawing turned into a bill of materials automatically"}
 ]},
{slug:"excel-automation",form:"Excel automation",title:"Excel automation",
 short:"Macros that replace copy-paste reports and reduce errors.",
 description:"Reports built by copying and pasting between sheets take hours and are easy to get wrong. We build macros and formulas that collect, clean and arrange the data for you.\n\nThe result can be a report that updates itself, sheets that read data from your CAD files, or a daily summary your team opens each morning. We keep it simple so your staff can use it easily.",
 canDo:["Reports that build themselves from your data","Macros that replace repeated copy-paste work","Links between CAD data and Excel sheets","Data cleaning and formatting in bulk","Checks that flag missing or wrong entries","Simple buttons and forms to make sheets easy to use"],
 media:[
  {type:"photo",src:"images/excel-automation.svg",caption:"Illustration: a spreadsheet processed row by row by a macro"}
 ]},
{slug:"dashboards",form:"Real-time workflow dashboard",title:"Real-time workflow dashboards",
 short:"One screen showing what is done, what is late and what needs attention.",
 description:"A dashboard puts the state of your work on one screen: what is finished, what is running and what is late. Instead of asking around or opening many files, you see it at a glance.\n\nWe connect it to the files and tools you already use, so it updates as work happens. The demo on the home page shows the idea, and your version is laid out around how your own team works.",
 canDo:["Job, drawing and task tracking screens","Status read from your own files","Summary figures for done, pending and late work","Progress bars and charts for each project","A layout built around your team’s process"],
 media:[
  {type:"photo",src:"images/dashboards.svg",caption:"Illustration: a workflow dashboard with progress bars and a trend line"}
 ]},
{slug:"electronic-automation",form:"Electronic automation",title:"Electronic automation",
 short:"Sensors and controllers that take over repetitive tasks.",
 description:"Repetitive tasks such as switching a motor, watching a level or counting parts can be handed to a small electronic system. Sensors read what is happening and a controller decides what to do.\n\nWe choose the sensors, controller and switching parts, wire them up and test the system, so the task runs by itself and works reliably before we hand it over.",
 canDo:["Sensor and controller based automation","Automatic on and off control of motors and equipment","Timers, counters and level control","Wiring and fitting at your site","Testing before handover"],
 media:[
  {type:"photo",src:"images/electronic-automation.svg",caption:"Illustration: a sensor feeding a controller that switches a load"}
 ]},
{slug:"pcb",form:"Circuit board customisation",title:"Circuit board customisation",
 short:"Custom PCB layouts and changes built around your product.",
 description:"Off-the-shelf boards do not always fit your product. A custom circuit board can be made to your size and shape, with only the parts you need.\n\nWe design the layout, place the components and route the connections, or change an existing board to add or fix something. You receive the files needed to have the board fabricated.",
 canDo:["New custom PCB layouts","Changes and fixes to existing boards","Boards sized to fit your enclosure","Component placement and routing","Output files for PCB fabrication"],
 media:[
  {type:"photo",src:"images/pcb.svg",caption:"Illustration: a circuit board with a chip and signal traces"}
 ]},
{slug:"home-automation",form:"Home automation",title:"Home automation",
 short:"Lights, fans, appliances, gates and security you control from your phone or on a schedule.",
 description:"Home automation lets you switch lights, fans and appliances from your phone, on a schedule or by a sensor. It saves walking around and helps you avoid leaving things on.\n\nWe fit the switching parts, connect them and set them up for you, and can link the garage door or gate into the same system, so one app controls the whole home.",
 canDo:["Phone control of lights, fans and appliances","Schedules and timers","Sensor based automatic control","Control of garage doors and gates","Fitting, wiring and testing at your home"],
 media:[
  {type:"photo",src:"images/home-automation.svg",caption:"Illustration: a home with a light controlled from a phone"}
 ]}
];
