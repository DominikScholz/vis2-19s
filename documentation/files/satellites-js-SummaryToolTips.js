NDSummary.OnToolTipsLoaded("File:satellites.js",{24:"<div class=\"NDToolTip TFunction LJavaScript\"><div id=\"NDPrototype24\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">function</span> loadJSON(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PName first last\">callback,</td></tr><tr><td class=\"PName first last\">path</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">loads the TLE json</div></div>",15:"<div class=\"NDToolTip TFunction LJavaScript\"><div id=\"NDPrototype15\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">function</span> startSatelliteLoading(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PName first last\">scene</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">starts loading satellite data (local for now)</div></div>",17:"<div class=\"NDToolTip TFunction LJavaScript\"><div id=\"NDPrototype17\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">function</span> getSatellites(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PName first last\">scene,</td></tr><tr><td class=\"PName first last\">tle_text</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">parses the satellites from the given TLE data</div></div>",18:"<div class=\"NDToolTip TFunction LJavaScript\"><div id=\"NDPrototype18\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">function</span> prepareSatellitePoints(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PName first last\">sat_count</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">initializes the THREE.js buffers for rendering the satellite point cloud</div></div>",19:"<div class=\"NDToolTip TFunction LJavaScript\"><div class=\"TTSummary\">prepares the THREE.js buffers for rendering the orbits</div></div>",20:"<div class=\"NDToolTip TFunction LJavaScript\"><div id=\"NDPrototype20\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">function</span> updateOrbitBuffer(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PName first last\">sat_id</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">requests the orbit worker to get an update of the given satellite\'s orbit</div></div>",21:"<div class=\"NDToolTip TFunction LJavaScript\"><div id=\"NDPrototype21\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">function</span> updateSatelliteDateRelevantInfos()</div><div class=\"TTSummary\">updates the date dependent code for the satellites</div></div>",22:"<div class=\"NDToolTip TFunction LJavaScript\"><div id=\"NDPrototype22\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">function</span> updateSatelliteCalculationWorker()</div><div class=\"TTSummary\">updates the satellites calculation worker by giving it the current time</div></div>",25:"<div class=\"NDToolTip TFunction LJavaScript\"><div id=\"NDPrototype25\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\">satelliteWorker.onmessage = <span class=\"SHKeyword\">function</span>(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PName first last\">m</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">handles incoming messages from the satelliteWorker, which are updates on position, velocity and geo information of all satellites gets called approx. twice a second</div></div>",26:"<div class=\"NDToolTip TFunction LJavaScript\"><div id=\"NDPrototype26\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\">orbitWorker.onmessage = <span class=\"SHKeyword\">function</span>(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PName first last\">m</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">handles incoming messages from the orbitWorker which are updates of the orbit and ground track of one satellite</div></div>",27:"<div class=\"NDToolTip TFunction LJavaScript\"><div id=\"NDPrototype27\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">function</span> updateSatellites(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PName first last\">delta</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">updates the position of all satellites by adding the delta time scaled velocity vector gets called every frame in the rendering loop!</div></div>",28:"<div class=\"NDToolTip TFunction LJavaScript\"><div id=\"NDPrototype28\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">function</span> resetSatellite(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PName first last\">sat_id,</td></tr><tr><td class=\"PName first last\">sizes</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">resets a selected satellite</div></div>",16:"<div class=\"NDToolTip TFunction LJavaScript\"><div id=\"NDPrototype16\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">function</span> highlightSatellite(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PName first last\">sat_id,</td></tr><tr><td class=\"PName first last\">sizes</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">highlights a satellite, that is the satellite currently under the cursor (hovered)</div></div>",51:"<div class=\"NDToolTip TFunction LJavaScript\"><div id=\"NDPrototype51\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">function</span> unhighlightSatellites()</div></div>",48:"<div class=\"NDToolTip TFunction LJavaScript\"><div id=\"NDPrototype48\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">function</span> intersectSatellites(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PName first last\">raycaster,</td></tr><tr><td class=\"PName first last\">container</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">intersects the satellite cloud using the given raycaster, used for deciding which satellite is below the cursor</div></div>",109:"<div class=\"NDToolTip TFunction LJavaScript\"><div id=\"NDPrototype109\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">function</span> selectSatellite(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PName first last\">sat_id</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div>",110:"<div class=\"NDToolTip TFunction LJavaScript\"><div id=\"NDPrototype110\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">function</span> cloneOrbitAndProjection(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PName first last\">sat_id</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">clones the THREE.js buffers of the orbit and the projection line so they can be displayed</div></div>",111:"<div class=\"NDToolTip TFunction LJavaScript\"><div id=\"NDPrototype111\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">function</span> displaySatelliteOrbit(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PName first last\">sat_id</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">display a satellites orbit, ground track and information continously even if not hovered over, called if added to the details list (also from the outside)</div></div>",32:"<div class=\"NDToolTip TFunction LJavaScript\"><div id=\"NDPrototype32\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">function</span> removeSatellite(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PName first last\">sat_id</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div>"});