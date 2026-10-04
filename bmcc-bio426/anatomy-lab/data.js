// Course terms and independently written study explanations. See SOURCES.md.
const sections = [
  {
    "title": "Abdominal Aorta",
    "subtitle": "Principal arteries of the human body",
    "views": [
      "Whole body"
    ],
    "color": "#d64b59",
    "items": [
      {
        "name": "Abdominal Aorta",
        "location": "Retroperitoneal; from the diaphragm at T12 to the L4 bifurcation.",
        "job": "Distributes systemic blood to abdominal organs, the pelvis and lower limbs.",
        "key": "Its paired common iliac branches begin at about L4.",
        "aliases": [],
        "view": 0,
        "id": "s0-0",
        "vesselType": "artery"
      },
      {
        "name": "Anterior Tibial Artery",
        "location": "Anterior compartment of the leg, after crossing the interosseous membrane.",
        "job": "Supplies anterior leg muscles and continues as dorsalis pedis on the foot.",
        "key": "A branch of the popliteal artery.",
        "aliases": [],
        "view": 0,
        "id": "s0-1",
        "vesselType": "artery"
      },
      {
        "name": "Aortic Arch",
        "location": "Superior mediastinum; curves above the heart.",
        "job": "Distributes blood to the head, neck and upper limbs and continues as descending aorta.",
        "key": "Typical branches: brachiocephalic trunk, left common carotid and left subclavian.",
        "aliases": [],
        "view": 0,
        "id": "s0-2",
        "vesselType": "artery"
      },
      {
        "name": "Arcuate Artery",
        "location": "Dorsum of the foot, near the bases of the metatarsals.",
        "job": "Gives dorsal metatarsal branches that help supply the toes.",
        "key": "Here interpreted as the foot artery, a branch of dorsalis pedis; the PDF does not specify foot versus renal arcuate arteries.",
        "aliases": [],
        "view": 0,
        "id": "s0-3",
        "vesselType": "artery"
      },
      {
        "name": "Ascending Aorta",
        "location": "Leaves the left ventricle and rises within the pericardium.",
        "job": "Carries oxygenated blood from the left ventricle into systemic circulation.",
        "key": "The coronary arteries originate at its root.",
        "aliases": [],
        "view": 0,
        "id": "s0-4",
        "vesselType": "artery"
      },
      {
        "name": "Brachial Artery",
        "location": "Anterior arm; continuation of the axillary artery beyond teres major.",
        "job": "Supplies the arm before dividing into radial and ulnar arteries near the elbow.",
        "key": "Used when measuring blood pressure at the arm.",
        "aliases": [],
        "view": 0,
        "id": "s0-5",
        "vesselType": "artery"
      },
      {
        "name": "Brachiocephalic Artery",
        "location": "First typical branch of the aortic arch, on the right.",
        "job": "Feeds the right common carotid and right subclavian arteries.",
        "key": "There is normally no left brachiocephalic artery.",
        "aliases": [
          "Brachiocephalic Trunk",
          "Innominate Artery"
        ],
        "view": 0,
        "id": "s0-6",
        "vesselType": "artery"
      },
      {
        "name": "Celiac Trunk",
        "location": "Short anterior branch of the abdominal aorta near T12.",
        "job": "Supplies foregut derivatives through gastric, splenic and hepatic branches.",
        "key": "Its three classic branches are left gastric, splenic and common hepatic.",
        "aliases": [],
        "view": 0,
        "id": "s0-7",
        "vesselType": "artery"
      },
      {
        "name": "Common Carotid Artery",
        "location": "Ascends in the neck within the carotid sheath.",
        "job": "Provides the inflow that divides into internal and external carotid arteries.",
        "key": "The right arises from the brachiocephalic trunk; the left usually from the arch.",
        "aliases": [],
        "view": 0,
        "id": "s0-8",
        "vesselType": "artery"
      },
      {
        "name": "Common Hepatic Artery",
        "location": "Runs from the celiac trunk toward the liver on the anatomical right.",
        "job": "Supplies the liver and, through branches, parts of the stomach, duodenum and pancreas.",
        "key": "The proper hepatic artery continues toward the liver.",
        "aliases": [],
        "view": 0,
        "id": "s0-9",
        "vesselType": "artery"
      },
      {
        "name": "Common Iliac Artery",
        "location": "Paired terminal branches of the abdominal aorta.",
        "job": "Deliver blood to internal and external iliac arteries.",
        "key": "Distinguish common iliac from its pelvic and lower-limb branches.",
        "aliases": [],
        "view": 0,
        "id": "s0-10",
        "vesselType": "artery"
      },
      {
        "name": "External Carotid Artery",
        "location": "Anterior branch at the common carotid bifurcation.",
        "job": "Supplies much of the face, scalp and superficial head and neck.",
        "key": "Unlike internal carotid, it gives multiple branches in the neck.",
        "aliases": [],
        "view": 0,
        "id": "s0-11",
        "vesselType": "artery"
      },
      {
        "name": "External Iliac Artery",
        "location": "Along the pelvic brim; passes beneath the inguinal ligament.",
        "job": "Main arterial route from the pelvis into the lower limb.",
        "key": "Becomes the femoral artery at the inguinal ligament.",
        "aliases": [],
        "view": 0,
        "id": "s0-12",
        "vesselType": "artery"
      },
      {
        "name": "Femoral Artery",
        "location": "Anterior thigh, including the femoral triangle.",
        "job": "Supplies the lower limb directly and through branches such as profunda femoris.",
        "key": "Becomes popliteal after passing through the adductor hiatus.",
        "aliases": [],
        "view": 0,
        "id": "s0-13",
        "vesselType": "artery"
      },
      {
        "name": "Fibular Artery",
        "location": "Deep posterior leg, close to the fibula.",
        "job": "Supplies deep posterior and lateral leg structures.",
        "key": "Usually branches from posterior tibial via the tibioperoneal trunk.",
        "aliases": [
          "Peroneal Artery"
        ],
        "view": 0,
        "id": "s0-14",
        "vesselType": "artery"
      },
      {
        "name": "Inferior Mesenteric Artery",
        "location": "Anterior abdominal aorta, usually around L3.",
        "job": "Supplies hindgut: distal transverse colon through the upper rectum.",
        "key": "The superior mesenteric artery supplies the midgut.",
        "aliases": [
          "IMA"
        ],
        "view": 0,
        "id": "s0-15",
        "vesselType": "artery"
      },
      {
        "name": "Internal Carotid Artery",
        "location": "Deep neck; enters the skull through the carotid canal.",
        "job": "Supplies the anterior cerebral circulation and the orbit.",
        "key": "Normally gives no branches in the neck.",
        "aliases": [],
        "view": 0,
        "id": "s0-16",
        "vesselType": "artery"
      },
      {
        "name": "Internal Iliac Artery",
        "location": "Branches medially into the pelvis.",
        "job": "Supplies pelvic organs, gluteal region and perineum.",
        "key": "External iliac is the major route to the lower limb.",
        "aliases": [],
        "view": 0,
        "id": "s0-17",
        "vesselType": "artery"
      },
      {
        "name": "Left Gastric Artery",
        "location": "Small celiac branch running toward the lesser curvature of the stomach.",
        "job": "Supplies the lower esophagus and lesser curvature.",
        "key": "Anastomoses with the right gastric artery.",
        "aliases": [],
        "view": 0,
        "id": "s0-18",
        "vesselType": "artery"
      },
      {
        "name": "Palmar Arch",
        "location": "Palm; superficial and deep arterial arches.",
        "job": "Connects radial and ulnar circulations and supplies digital branches.",
        "key": "The superficial arch is mainly ulnar; the deep arch mainly radial.",
        "aliases": [
          "Superficial Palmar Arch",
          "Deep Palmar Arch"
        ],
        "view": 0,
        "id": "s0-19",
        "vesselType": "artery"
      },
      {
        "name": "Popliteal Artery",
        "location": "Behind the knee in the popliteal fossa.",
        "job": "Supplies the knee region and gives rise to the major leg arteries.",
        "key": "Continuation of femoral after the adductor hiatus.",
        "aliases": [],
        "view": 0,
        "id": "s0-20",
        "vesselType": "artery"
      },
      {
        "name": "Posterior Tibial Artery",
        "location": "Posterior leg; passes behind the medial malleolus.",
        "job": "Supplies posterior leg and plantar foot.",
        "key": "Its pulse is felt behind the medial ankle.",
        "aliases": [],
        "view": 0,
        "id": "s0-21",
        "vesselType": "artery"
      },
      {
        "name": "Radial Artery",
        "location": "Lateral forearm on the thumb side in anatomical position.",
        "job": "Supplies the lateral forearm and contributes strongly to the deep palmar arch.",
        "key": "Common site for palpating the wrist pulse.",
        "aliases": [],
        "view": 0,
        "id": "s0-22",
        "vesselType": "artery"
      },
      {
        "name": "Renal Artery",
        "location": "Paired lateral branches of the abdominal aorta.",
        "job": "Deliver blood to the kidneys for filtration and tissue perfusion.",
        "key": "Usually arise inferior to the superior mesenteric artery.",
        "aliases": [],
        "view": 0,
        "id": "s0-23",
        "vesselType": "artery"
      },
      {
        "name": "Splenic Artery",
        "location": "Tortuous celiac branch along the superior border of the pancreas.",
        "job": "Supplies spleen and gives branches to pancreas and stomach.",
        "key": "The spleen lies on the anatomical left.",
        "aliases": [],
        "view": 0,
        "id": "s0-24",
        "vesselType": "artery"
      },
      {
        "name": "Subclavian Artery",
        "location": "Passes beneath the clavicle toward the upper limb.",
        "job": "Supplies upper limb and gives branches to neck, brain and thorax.",
        "key": "Continues as axillary at the lateral border of the first rib.",
        "aliases": [],
        "view": 0,
        "id": "s0-25",
        "vesselType": "artery"
      },
      {
        "name": "Superior Mesenteric Artery",
        "location": "Anterior aortic branch near L1.",
        "job": "Supplies midgut, from distal duodenum through proximal two-thirds of transverse colon.",
        "key": "Passes anterior to the third part of the duodenum.",
        "aliases": [
          "SMA"
        ],
        "view": 0,
        "id": "s0-26",
        "vesselType": "artery"
      },
      {
        "name": "Thoracic Aorta",
        "location": "Descending aorta in the posterior mediastinum.",
        "job": "Supplies thoracic wall and organs through segmental and visceral branches.",
        "key": "Becomes abdominal aorta after passing through the diaphragm at T12.",
        "aliases": [
          "Descending Thoracic Aorta"
        ],
        "view": 0,
        "id": "s0-27",
        "vesselType": "artery"
      },
      {
        "name": "Ulnar Artery",
        "location": "Medial forearm on the little-finger side.",
        "job": "Supplies forearm and is the main contributor to the superficial palmar arch.",
        "key": "Distinguish ulnar (medial) from radial (lateral).",
        "aliases": [],
        "view": 0,
        "id": "s0-28",
        "vesselType": "artery"
      },
      {
        "name": "Vertebral Artery",
        "location": "Ascends through cervical transverse foramina and enters the foramen magnum.",
        "job": "Supplies posterior brain circulation and parts of the spinal cord.",
        "key": "The two vertebral arteries unite to form the basilar artery.",
        "aliases": [],
        "view": 0,
        "id": "s0-29",
        "vesselType": "artery"
      }
    ]
  },
  {
    "title": "Principal Veins of the Human Body",
    "subtitle": "Systemic return & the hepatic portal system",
    "views": [
      "Whole body",
      "Abdominal veins",
      "Posterior thorax"
    ],
    "color": "#4589d5",
    "items": [
      {
        "name": "Accessory Hemiazygos Vein",
        "location": "Upper left posterior thorax.",
        "job": "Drains several upper left posterior intercostal spaces into the azygos system.",
        "key": "Crosses the midline to reach the azygos vein; pattern varies.",
        "aliases": [],
        "view": 2,
        "id": "s1-0",
        "vesselType": "vein"
      },
      {
        "name": "Anterior Tibial Vein",
        "location": "Deep anterior leg, alongside the corresponding artery.",
        "job": "Returns blood from the anterior compartment to the popliteal vein.",
        "key": "Deep limb veins often occur as paired venae comitantes.",
        "aliases": [],
        "view": 0,
        "id": "s1-1",
        "vesselType": "vein"
      },
      {
        "name": "Axillary Vein",
        "location": "Axilla; formed near the inferior border of teres major.",
        "job": "Collects blood from the arm and becomes subclavian at the first rib.",
        "key": "Receives the cephalic vein.",
        "aliases": [],
        "view": 0,
        "id": "s1-2",
        "vesselType": "vein"
      },
      {
        "name": "Azygos Vein",
        "location": "Right side of the vertebral column in the posterior thorax.",
        "job": "Drains posterior chest wall into the superior vena cava.",
        "key": "Arches over the root of the right lung.",
        "aliases": [],
        "view": 2,
        "id": "s1-3",
        "vesselType": "vein"
      },
      {
        "name": "Basilic Vein",
        "location": "Superficial medial forearm and arm.",
        "job": "Drains superficial medial upper limb and joins deep veins to form the axillary vein.",
        "key": "Basilic is medial; cephalic is lateral.",
        "aliases": [],
        "view": 0,
        "id": "s1-4",
        "vesselType": "vein"
      },
      {
        "name": "Brachial Vein",
        "location": "Deep arm alongside brachial artery.",
        "job": "Returns deep upper-limb blood toward the axillary vein.",
        "key": "Usually paired, unlike the superficial cephalic and basilic veins.",
        "aliases": [],
        "view": 0,
        "id": "s1-5",
        "vesselType": "vein"
      },
      {
        "name": "Brachiocephalic Vein",
        "location": "Each formed by union of internal jugular and subclavian veins.",
        "job": "Unites head, neck and upper-limb venous return into the superior vena cava.",
        "key": "The left crosses the upper mediastinum and is longer.",
        "aliases": [
          "Innominate Vein"
        ],
        "view": 0,
        "id": "s1-6",
        "vesselType": "vein"
      },
      {
        "name": "Cephalic Vein",
        "location": "Superficial lateral forearm and arm; then deltopectoral groove.",
        "job": "Drains superficial lateral upper limb to the axillary vein.",
        "key": "Cephalic is on the thumb side in anatomical position.",
        "aliases": [],
        "view": 0,
        "id": "s1-7",
        "vesselType": "vein"
      },
      {
        "name": "Common Iliac Vein",
        "location": "Formed by internal and external iliac veins.",
        "job": "Returns pelvic and lower-limb blood to the inferior vena cava.",
        "key": "The two common iliac veins unite near L5.",
        "aliases": [],
        "view": 0,
        "id": "s1-8",
        "vesselType": "vein"
      },
      {
        "name": "External Iliac Vein",
        "location": "Continuation of femoral above the inguinal ligament.",
        "job": "Returns blood from lower limb toward the common iliac vein.",
        "key": "Joins internal iliac within the pelvis.",
        "aliases": [],
        "view": 0,
        "id": "s1-9",
        "vesselType": "vein"
      },
      {
        "name": "External Jugular Vein",
        "location": "Superficial neck, crossing sternocleidomastoid.",
        "job": "Drains superficial regions of head and neck into subclavian vein.",
        "key": "More superficial than internal jugular.",
        "aliases": [],
        "view": 0,
        "id": "s1-10",
        "vesselType": "vein"
      },
      {
        "name": "Femoral Vein",
        "location": "Deep thigh, alongside femoral artery.",
        "job": "Returns lower-limb blood and receives the great saphenous vein.",
        "key": "Becomes external iliac at the inguinal ligament.",
        "aliases": [],
        "view": 0,
        "id": "s1-11",
        "vesselType": "vein"
      },
      {
        "name": "Fibular Vein",
        "location": "Deep leg adjacent to the fibular artery.",
        "job": "Drains lateral and deep posterior leg toward posterior tibial veins.",
        "key": "Also called peroneal veins.",
        "aliases": [
          "Peroneal Vein"
        ],
        "view": 0,
        "id": "s1-12",
        "vesselType": "vein"
      },
      {
        "name": "Gonadal Vein",
        "location": "Ascends from testes or ovaries in the posterior abdomen.",
        "job": "Returns gonadal blood to the central venous system.",
        "key": "Right usually drains into IVC; left into left renal vein.",
        "aliases": [
          "Testicular Vein",
          "Ovarian Vein"
        ],
        "view": 1,
        "id": "s1-13",
        "vesselType": "vein"
      },
      {
        "name": "Great Saphenous Vein",
        "location": "Superficial medial foot, leg and thigh.",
        "job": "Returns superficial lower-limb blood to the femoral vein.",
        "key": "Passes anterior to the medial malleolus; longest vein in the body.",
        "aliases": [
          "Long Saphenous Vein"
        ],
        "view": 0,
        "id": "s1-14",
        "vesselType": "vein"
      },
      {
        "name": "Hemiazygos Vein",
        "location": "Lower left posterior thorax.",
        "job": "Drains lower left posterior intercostal spaces into azygos vein.",
        "key": "Crosses to the right, usually around T8–T9.",
        "aliases": [],
        "view": 2,
        "id": "s1-15",
        "vesselType": "vein"
      },
      {
        "name": "Hepatic Portal Vein",
        "location": "Formed mainly by superior mesenteric and splenic veins behind the pancreas.",
        "job": "Carries nutrient-rich venous blood from digestive organs and spleen to liver sinusoids.",
        "key": "This is a portal route between two capillary beds, before blood returns to the heart.",
        "aliases": [
          "Portal Vein"
        ],
        "view": 1,
        "id": "s1-16",
        "vesselType": "vein"
      },
      {
        "name": "Hepatic Vein",
        "location": "Leaves the liver superiorly.",
        "job": "Drains liver sinusoids directly into the inferior vena cava.",
        "key": "Hepatic portal brings blood in; hepatic veins take blood out.",
        "aliases": [
          "Hepatic Veins"
        ],
        "view": 1,
        "id": "s1-17",
        "vesselType": "vein"
      },
      {
        "name": "Internal Iliac Vein",
        "location": "Deep pelvis.",
        "job": "Drains pelvic viscera, gluteal region and perineum into common iliac vein.",
        "key": "Runs with the internal iliac arterial distribution.",
        "aliases": [],
        "view": 0,
        "id": "s1-18",
        "vesselType": "vein"
      },
      {
        "name": "Inferior Mesenteric Vein",
        "location": "Left side of the abdomen.",
        "job": "Drains hindgut, including descending and sigmoid colon and upper rectum.",
        "key": "Usually joins the splenic vein.",
        "aliases": [
          "IMV"
        ],
        "view": 1,
        "id": "s1-19",
        "vesselType": "vein"
      },
      {
        "name": "Inferior Vena Cava",
        "location": "Right of the abdominal aorta; passes through diaphragm at T8.",
        "job": "Returns blood from below the diaphragm to right atrium.",
        "key": "Formed by union of common iliac veins.",
        "aliases": [
          "IVC"
        ],
        "view": 0,
        "id": "s1-20",
        "vesselType": "vein"
      },
      {
        "name": "Internal Jugular Vein",
        "location": "Deep neck within the carotid sheath.",
        "job": "Drains brain and deep head and neck into brachiocephalic vein.",
        "key": "Joins subclavian behind the sternoclavicular joint.",
        "aliases": [],
        "view": 0,
        "id": "s1-21",
        "vesselType": "vein"
      },
      {
        "name": "Left Gastric Vein",
        "location": "Along the lesser curvature of stomach.",
        "job": "Drains stomach and lower esophagus toward hepatic portal vein.",
        "key": "Connects with esophageal systemic veins at a portosystemic anastomosis.",
        "aliases": [],
        "view": 1,
        "id": "s1-22",
        "vesselType": "vein"
      },
      {
        "name": "Median Antebrachial Vein",
        "location": "Superficial anterior midline of forearm.",
        "job": "Drains the superficial palm and forearm into variable superficial elbow veins.",
        "key": "Its termination varies between people.",
        "aliases": [
          "Median Vein of Forearm"
        ],
        "view": 0,
        "id": "s1-23",
        "vesselType": "vein"
      },
      {
        "name": "Median Cubital Vein",
        "location": "Superficial cubital fossa, anterior to elbow.",
        "job": "Typically links cephalic and basilic veins.",
        "key": "Common site of venipuncture; superficial to the bicipital aponeurosis.",
        "aliases": [],
        "view": 0,
        "id": "s1-24",
        "vesselType": "vein"
      },
      {
        "name": "Phrenic Vein",
        "location": "At the diaphragm; inferior phrenic veins shown here.",
        "job": "Drains diaphragm into IVC and, on the left, sometimes renal or suprarenal pathways.",
        "key": "The PDF uses the general term phrenic; superior phrenic veins drain via the azygos system.",
        "aliases": [
          "Inferior Phrenic Vein"
        ],
        "view": 1,
        "id": "s1-25",
        "vesselType": "vein"
      },
      {
        "name": "Popliteal Vein",
        "location": "Behind the knee; deep in popliteal fossa.",
        "job": "Collects deep leg veins and continues as femoral vein.",
        "key": "Also receives the small saphenous vein.",
        "aliases": [],
        "view": 0,
        "id": "s1-26",
        "vesselType": "vein"
      },
      {
        "name": "Posterior Tibial Vein",
        "location": "Deep posterior leg.",
        "job": "Returns plantar foot and posterior leg blood toward popliteal vein.",
        "key": "Accompanies the posterior tibial artery behind the medial malleolus.",
        "aliases": [],
        "view": 0,
        "id": "s1-27",
        "vesselType": "vein"
      },
      {
        "name": "Radial Vein",
        "location": "Deep lateral forearm.",
        "job": "Drains deep thumb-side forearm toward brachial veins.",
        "key": "Paired veins usually accompany the radial artery.",
        "aliases": [],
        "view": 0,
        "id": "s1-28",
        "vesselType": "vein"
      },
      {
        "name": "Renal Vein",
        "location": "Between kidneys and inferior vena cava.",
        "job": "Returns filtered blood from kidneys to IVC.",
        "key": "Left renal vein crosses anterior to the aorta and is longer.",
        "aliases": [],
        "view": 1,
        "id": "s1-29",
        "vesselType": "vein"
      },
      {
        "name": "Small Saphenous Vein",
        "location": "Superficial posterior calf; begins on lateral foot.",
        "job": "Usually drains into popliteal vein.",
        "key": "Passes posterior to the lateral malleolus.",
        "aliases": [
          "Short Saphenous Vein"
        ],
        "view": 0,
        "id": "s1-30",
        "vesselType": "vein"
      },
      {
        "name": "Splenic Vein",
        "location": "Behind pancreas, running from spleen toward the midline.",
        "job": "Drains spleen and receives pancreatic and gastric tributaries.",
        "key": "Joins superior mesenteric vein to form the portal vein.",
        "aliases": [],
        "view": 1,
        "id": "s1-31",
        "vesselType": "vein"
      },
      {
        "name": "Subclavian Vein",
        "location": "Under clavicle; continuation of axillary vein.",
        "job": "Returns upper-limb blood to brachiocephalic vein.",
        "key": "Passes anterior to anterior scalene muscle.",
        "aliases": [],
        "view": 0,
        "id": "s1-32",
        "vesselType": "vein"
      },
      {
        "name": "Superior Mesenteric Vein",
        "location": "Runs in mesentery, generally to the right of the corresponding artery.",
        "job": "Drains small intestine and proximal large intestine into the portal system.",
        "key": "Joins splenic vein behind the pancreatic neck.",
        "aliases": [
          "SMV"
        ],
        "view": 1,
        "id": "s1-33",
        "vesselType": "vein"
      },
      {
        "name": "Superior Vena Cava",
        "location": "Right superior mediastinum.",
        "job": "Returns systemic venous blood from above the diaphragm to right atrium.",
        "key": "Receives azygos vein before entering the heart.",
        "aliases": [
          "SVC"
        ],
        "view": 0,
        "id": "s1-34",
        "vesselType": "vein"
      },
      {
        "name": "Suprarenal Vein",
        "location": "Leaves the adrenal glands above the kidneys.",
        "job": "Drains adrenal tissue and carries its secreted hormones into circulation.",
        "key": "Right usually enters IVC directly; left usually enters left renal vein.",
        "aliases": [
          "Adrenal Vein"
        ],
        "view": 1,
        "id": "s1-35",
        "vesselType": "vein"
      },
      {
        "name": "Ulnar Vein",
        "location": "Deep medial forearm.",
        "job": "Returns deep little-finger-side forearm blood toward brachial veins.",
        "key": "Accompanies ulnar artery; distinct from superficial basilic vein.",
        "aliases": [],
        "view": 0,
        "id": "s1-36",
        "vesselType": "vein"
      },
      {
        "name": "Vertebral Vein",
        "location": "Deep cervical region near vertebral artery.",
        "job": "Drains cervical vertebral and deep neck networks into brachiocephalic vein.",
        "key": "Associated with the cervical transverse foramina.",
        "aliases": [],
        "view": 0,
        "id": "s1-37",
        "vesselType": "vein"
      }
    ]
  },
  {
    "title": "Heart Blood Vessels",
    "subtitle": "Coronary circulation",
    "views": [
      "Anterior",
      "Posterior"
    ],
    "color": "#d64b59",
    "items": [
      {
        "name": "Anterior Interventricular Branch of LCA",
        "location": "Anterior interventricular sulcus, toward apex.",
        "job": "Supplies anterior ventricular walls and much of the anterior two-thirds of the interventricular septum.",
        "key": "Often called left anterior descending artery (LAD).",
        "aliases": [
          "LAD",
          "Left Anterior Descending",
          "Left Anterior Descending Artery",
          "Anterior Interventricular Artery",
          "Anterior Interventricular Branch"
        ],
        "view": 0,
        "id": "s2-0",
        "vesselType": "artery"
      },
      {
        "name": "Coronary Sinus",
        "location": "Posterior atrioventricular groove.",
        "job": "Collects most venous blood from myocardium and drains into right atrium.",
        "key": "Receives great and middle cardiac veins.",
        "aliases": [],
        "view": 1,
        "id": "s2-1",
        "vesselType": "vein"
      },
      {
        "name": "Great Cardiac Vein",
        "location": "Alongside LAD anteriorly, then around left atrioventricular groove.",
        "job": "Returns blood from anterior heart toward coronary sinus.",
        "key": "Arteries and veins can share the same surface groove.",
        "aliases": [],
        "view": 0,
        "id": "s2-2",
        "vesselType": "vein"
      },
      {
        "name": "Left Coronary Artery (LCA)",
        "location": "Short trunk from left aortic sinus, behind pulmonary trunk.",
        "job": "Supplies much of left heart through anterior interventricular and circumflex branches.",
        "key": "Left marginal artery usually comes from its circumflex branch.",
        "aliases": [
          "LCA",
          "Left Coronary Artery",
          "Left Coronary",
          "Left Main Coronary Artery"
        ],
        "view": 0,
        "id": "s2-3",
        "vesselType": "artery"
      },
      {
        "name": "Left Marginal Branch of LCA",
        "location": "Along left (obtuse) margin of heart.",
        "job": "Supplies lateral wall of left ventricle.",
        "key": "Typically arises from circumflex branch of LCA.",
        "aliases": [
          "Left Marginal Artery",
          "Left Marginal Branch",
          "Obtuse Marginal Artery"
        ],
        "view": 0,
        "id": "s2-4",
        "vesselType": "artery"
      },
      {
        "name": "Left Marginal Vein",
        "location": "Left margin of heart, near left marginal artery.",
        "job": "Drains lateral left ventricular wall toward great cardiac vein or coronary sinus.",
        "key": "Its drainage pattern can vary.",
        "aliases": [],
        "view": 0,
        "id": "s2-5",
        "vesselType": "vein"
      },
      {
        "name": "Middle Cardiac Vein",
        "location": "Posterior interventricular sulcus.",
        "job": "Drains posterior ventricular walls into coronary sinus.",
        "key": "Accompanies posterior interventricular artery.",
        "aliases": [
          "Posterior Interventricular Vein"
        ],
        "view": 1,
        "id": "s2-6",
        "vesselType": "vein"
      },
      {
        "name": "Posterior Interventricular Branch of RCA",
        "location": "Posterior interventricular sulcus.",
        "job": "Supplies inferior ventricular walls and posterior third of interventricular septum.",
        "key": "Usually arises from RCA (right dominance); origin varies with coronary dominance.",
        "aliases": [
          "Posterior Interventricular Artery",
          "Posterior Descending Artery",
          "PDA",
          "Posterior Interventricular Branch"
        ],
        "view": 1,
        "id": "s2-7",
        "vesselType": "artery"
      },
      {
        "name": "Right Coronary Artery (RCA)",
        "location": "From right aortic sinus along right atrioventricular groove.",
        "job": "Supplies much of right heart and commonly the SA and AV nodes.",
        "key": "Its posterior interventricular branch is present in right-dominant circulation.",
        "aliases": [
          "RCA",
          "Right Coronary Artery",
          "Right Coronary"
        ],
        "view": 0,
        "id": "s2-8",
        "vesselType": "artery"
      },
      {
        "name": "Right Marginal Branch of RCA",
        "location": "Along the right (acute) margin of heart.",
        "job": "Supplies right ventricular free wall.",
        "key": "A branch of the right coronary artery.",
        "aliases": [
          "Right Marginal Artery",
          "Right Marginal Branch",
          "Acute Marginal Artery"
        ],
        "view": 0,
        "id": "s2-9",
        "vesselType": "artery"
      }
    ]
  },
  {
    "title": "The Human Heart",
    "subtitle": "Chambers, valves & the heart wall",
    "views": [
      "Sectioned heart",
      "Heart wall"
    ],
    "color": "#b77bdd",
    "items": [
      {
        "name": "Aorta",
        "location": "Leaves left ventricle through aortic valve.",
        "job": "Distributes oxygenated blood to systemic circulation.",
        "key": "Elastic recoil helps maintain flow between ventricular contractions.",
        "aliases": [],
        "view": 0,
        "id": "s3-0",
        "vesselType": "artery"
      },
      {
        "name": "Aortic Valve",
        "location": "Between left ventricle and aortic root.",
        "job": "Prevents aortic backflow into left ventricle during diastole.",
        "key": "Semilunar valve with three cusps; has no chordae tendineae.",
        "aliases": [
          "Aortic Semilunar Valve"
        ],
        "view": 0,
        "id": "s3-1",
        "vesselType": null
      },
      {
        "name": "Bicuspid Valve",
        "location": "Between left atrium and left ventricle.",
        "job": "Prevents backflow into left atrium during ventricular systole.",
        "key": "Also called mitral or left atrioventricular valve.",
        "aliases": [
          "Mitral Valve",
          "Left Atrioventricular Valve",
          "Left AV Valve"
        ],
        "view": 0,
        "id": "s3-2",
        "vesselType": null
      },
      {
        "name": "Chordae Tendineae",
        "location": "Fibrous cords joining AV valve leaflets to papillary muscles.",
        "job": "Tension prevents valve leaflets prolapsing into atria during systole.",
        "key": "They stabilize AV valves; they do not pull valves open.",
        "aliases": [
          "Chordae",
          "Tendinous Cords"
        ],
        "view": 0,
        "id": "s3-3",
        "vesselType": null
      },
      {
        "name": "Endocardium",
        "location": "Innermost heart lining; continuous with vascular endothelium.",
        "job": "Provides a smooth blood-contacting surface lining chambers and valves.",
        "key": "Inner to myocardium.",
        "aliases": [],
        "view": 1,
        "id": "s3-4",
        "vesselType": null
      },
      {
        "name": "Epicardium",
        "location": "Outer surface of heart; visceral layer of serous pericardium.",
        "job": "Protects heart surface and participates in a low-friction interface.",
        "key": "Coronary vessels course in connective tissue beneath its surface.",
        "aliases": [
          "Visceral Pericardium",
          "Visceral Layer of Serous Pericardium"
        ],
        "view": 1,
        "id": "s3-5",
        "vesselType": null
      },
      {
        "name": "Inferior Vena Cava",
        "location": "Enters right atrium inferiorly.",
        "job": "Returns systemic venous blood from below the diaphragm.",
        "key": "Empties into right atrium, not a ventricle.",
        "aliases": [
          "IVC"
        ],
        "view": 0,
        "id": "s3-6",
        "vesselType": "vein"
      },
      {
        "name": "Interventricular Septum",
        "location": "Muscular partition between right and left ventricles.",
        "job": "Separates ventricular blood and carries part of the conduction system.",
        "key": "Includes a small superior membranous part.",
        "aliases": [
          "Ventricular Septum"
        ],
        "view": 0,
        "id": "s3-7",
        "vesselType": null
      },
      {
        "name": "Left Atrium",
        "location": "Posterior receiving chamber on the anatomical left.",
        "job": "Receives oxygenated pulmonary venous blood and feeds left ventricle.",
        "key": "Its auricle contains pectinate muscles.",
        "aliases": [],
        "view": 0,
        "id": "s3-8",
        "vesselType": null
      },
      {
        "name": "Left Ventricle",
        "location": "Thick-walled chamber forming the apex.",
        "job": "Pumps blood into aorta against systemic resistance.",
        "key": "Its myocardium is thicker than the right ventricular wall.",
        "aliases": [],
        "view": 0,
        "id": "s3-9",
        "vesselType": null
      },
      {
        "name": "Myocardium",
        "location": "Middle, muscular layer of heart wall.",
        "job": "Cardiac muscle contraction generates pumping pressure.",
        "key": "Thickest in the left ventricle.",
        "aliases": [],
        "view": 1,
        "id": "s3-10",
        "vesselType": null
      },
      {
        "name": "Papillary Muscle",
        "location": "Muscular projections from ventricular walls.",
        "job": "Contract to tension chordae and prevent AV valve prolapse during systole.",
        "key": "Work with chordae; not attached to semilunar valves.",
        "aliases": [
          "Papillary Muscles"
        ],
        "view": 0,
        "id": "s3-11",
        "vesselType": null
      },
      {
        "name": "Pectinate Muscle",
        "location": "Ridges in atrial wall, especially right atrium and both auricles.",
        "job": "Contribute to atrial contraction.",
        "key": "Do not confuse atrial pectinate muscles with ventricular trabeculae carneae.",
        "aliases": [
          "Pectinate Muscles"
        ],
        "view": 0,
        "id": "s3-12",
        "vesselType": null
      },
      {
        "name": "Pulmonary Artery",
        "location": "Paired branches of pulmonary trunk leading to lungs.",
        "job": "Carry relatively deoxygenated blood toward pulmonary capillaries.",
        "key": "Artery means away from heart, not necessarily oxygenated.",
        "aliases": [
          "Pulmonary Arteries",
          "Left Pulmonary Artery",
          "Right Pulmonary Artery"
        ],
        "view": 0,
        "id": "s3-13",
        "vesselType": "artery"
      },
      {
        "name": "Pulmonary Valve",
        "location": "Between right ventricle and pulmonary trunk.",
        "job": "Prevents backflow from pulmonary trunk into right ventricle.",
        "key": "Three-cusp semilunar valve, without chordae.",
        "aliases": [
          "Pulmonic Valve",
          "Pulmonary Semilunar Valve"
        ],
        "view": 0,
        "id": "s3-14",
        "vesselType": null
      },
      {
        "name": "Pulmonary Trunk",
        "location": "Large vessel leaving right ventricle, anterior to aortic root.",
        "job": "Carries right ventricular output before splitting into pulmonary arteries.",
        "key": "Distinguish the single trunk from its right and left arterial branches.",
        "aliases": [],
        "view": 0,
        "id": "s3-15",
        "vesselType": "artery"
      },
      {
        "name": "Pulmonary Vein",
        "location": "Usually four vessels entering posterior left atrium.",
        "job": "Return oxygenated blood from lungs.",
        "key": "Vein means toward heart, not necessarily deoxygenated.",
        "aliases": [
          "Pulmonary Veins"
        ],
        "view": 0,
        "id": "s3-16",
        "vesselType": "vein"
      },
      {
        "name": "Right Atrium",
        "location": "Receiving chamber on anatomical right.",
        "job": "Receives superior and inferior venae cavae and coronary sinus; passes blood through tricuspid valve.",
        "key": "The SA node is near the superior vena cava opening.",
        "aliases": [],
        "view": 0,
        "id": "s3-17",
        "vesselType": null
      },
      {
        "name": "Right Ventricle",
        "location": "Anterior chamber; thinner wall than left ventricle.",
        "job": "Pumps relatively deoxygenated blood through pulmonary valve toward lungs.",
        "key": "Faces a lower-pressure circuit than the left ventricle.",
        "aliases": [],
        "view": 0,
        "id": "s3-18",
        "vesselType": null
      },
      {
        "name": "Superior Vena Cava",
        "location": "Enters right atrium superiorly.",
        "job": "Returns systemic venous blood from head, neck, upper limbs and thorax.",
        "key": "Distinct from pulmonary veins, which enter left atrium.",
        "aliases": [
          "SVC"
        ],
        "view": 0,
        "id": "s3-19",
        "vesselType": "vein"
      },
      {
        "name": "Tricuspid Valve",
        "location": "Between right atrium and right ventricle.",
        "job": "Prevents backflow into right atrium during ventricular systole.",
        "key": "Right AV valve with three principal leaflets.",
        "aliases": [
          "Right Atrioventricular Valve",
          "Right AV Valve"
        ],
        "view": 0,
        "id": "s3-20",
        "vesselType": null
      }
    ]
  }
];
