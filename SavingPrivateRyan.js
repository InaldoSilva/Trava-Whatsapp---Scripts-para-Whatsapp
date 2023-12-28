async function enviarScript(scriptText){
	const lines = scriptText.split(/[\n\t]+/).map(line => line.trim()).filter(line => line);
	main = document.querySelector("#main"),
	textarea = main.querySelector(`div[contenteditable="true"]`)
	
	if(!textarea) throw new Error("Não há uma conversa aberta")
	
	for(const line of lines){
		console.log(line)
	
		textarea.focus();
		document.execCommand('insertText', false, line);
		textarea.dispatchEvent(new Event('change', {bubbles: true}));
	
		setTimeout(() => {
			(main.querySelector(`[data-testid="send"]`) || main.querySelector(`[data-icon="send"]`)).click();
		}, 100);
		
		if(lines.indexOf(line) !== lines.length - 1) await new Promise(resolve => setTimeout(resolve, 250));
	}
	
	return lines.length;
}

enviarScript(`

SAVING PRIVATE RYAN
by
Robert Rodat
This screenplay has been type by David Pritchett.
FADE IN:
CREDITS: White lettering over a back background. The
THUNDEROUS SOUNDS OF A MASSIVE NAVAL BARRAGE are heard. The
power is astonishing. It roars through the body, blows back
the hair and rattles the ears.
FADE IN:
EXT. OMAHA BEACH - NORMANDY - DAWN
The ROAR OF NAVAL GUNS continues but now WE SEE THEM FIRING.
Huge fifteen inch guns.
A SWARM OF LANDING CRAFT
Heads directly into a nightmare. MASSIVE EXPLOSIONS from
German artillery shells and mined obstacles tear apart the
beach. Hundreds of German machine guns, loaded with tracers,
pour out a red snowstorm of bullets.
OFFSHORE
SUPERIMPOSITION:
OMAHA BEACH, NORMANDY
June 6, 1944
0600 HOURS
HUNDREDS OF LANDING CRAFT
Each holding thirty men, near the beaches.
THE CLIFFS
At the far end of the beach, a ninety-foot cliff. Topped by
bunkers. Ringed by fortified machine gun nests. A clear lineof-fire down the entire beach.
TEN LANDING CRAFT
Make their way toward the base of the cliffs. Running a
gauntlet of explosions.
SUPERIMPOSITION:
THE FOLLOWING IS BASED
ON A TRUE STORY
THE LEAD LANDING CRAFT
Plows through the waves.
2.
THE CAMERA MOVES PAST THE FACES OF THE MEN
Boys. Most are eighteen or nineteen years old. Tough. Welltrained. Trying to block out the fury around them.
A DIRECT HIT ON A NEARBY LANDING CRAFT
A huge EXPLOSION of fuel, fire, metal and flesh.
THE LEAD LANDING CRAFT
The Motorman holds his course. Shells EXPLODE around them.
FLAMING OIL BURNS on the water. CANNON FIRE SMASHES into the
bow.
THE MOTORMAN IS RIPPED TO BITS
BLOOD AND FLESH shower the men behind him. The mate takes
the controls.
A YOUNG SOLDIER
His face covered with the remains of the motorman. Starts to
lose it. Begins to shudder and weep. His name is DeLancey.
THE BOYS AROUND HIM
Do their best to stare straight ahead. But the fear infects
them. It starts to spread.
A FIGURE
Pushes through the men. Puts himself in front of DeLancey.
The figure is CAPTAIN JOHN MILLER. Early thirties. By far
the oldest man on the craft. Relaxed, battle-hardened,
powerful, ignoring the hell around them. He smiles, puts a
cigar in his mouth, strikes a match on the front of
DeLancey's helmet and lights the cigar.
DeLancey tries to look away but Miller grips him by the jaw
and forces him to lock eyes. Miller smiles. DeLancey is
terrified.
DELANCEY
Captain, are we all gonna die?
MILLER
Hell no, two-thirds, tops.
DELANCEY
Oh, Jesus...
3.
MILLER
I want every one of you to look at
the man on your left. Now look at
the man on your right. Feel sorry
for those to sons-of-bitches,
they're going to get it, you're
not going to get a scratch.
A few, including DeLancey, manage thin smiles. Miller
releases his grip on DeLancey who moves his jaw as if to see
if it's broken. Miller pats him on the cheek and moves on to
the bow.
MILLER
Looks over the gunwale at THE HELL IN FRONT OF THEM.
PAN DOWN TO MILLER'S HAND
It quivers in fear. Miller glances around, sees that none of
the men have noticed. He stares at his hand as if it belongs
to someone else. It stops shaking. He turns his eyes back to
the objective.
THE LEAD LANDING CRAFT HITS THE BEACH
The six surviving boats alongside.
EXPLOSIVE PROPELLED GRAPPLING HOOKS FIRE
From the landing crafts. Arc toward the top of the cliffs.
THE LEAD CRAFT RAMP GOES DOWN
A river of MACHINE GUN FIRE pours into the craft. A dozen
men are INSTANTLY KILLED. Among them, DeLancey.
MILLER
Somehow survives. Jumps into the breakers.
MILLER
MOVE, GODDAMN IT! GO! GO! GO!
EXPLOSIONS EVERYWHERE
THE GERMANS
On the edge of the cliff. Rain down MACHINE GUN FIRE and
GRENADES.
4.
THE AMERICANS
Struggle through the surf. FIRING up as best they can.
Making for the base of the cliffs.
INCENDIARY GRENADES, HURLED FROM ABOVE,
EXPLODE, SPREADING FIRE
MILLER
Ignores the EXPLOSIONS and BULLETS. Uses hand signals and
curt orders.
MILLER
THERE! THERE! HOOKS THERE! FIRE
SQUAD, THOSE ROCKS!
THE MEN
Obey instantly. Set the grappling hooks. Take position.
Return fire.
THE SOUNDS OF BATTLE
Drown out most voices. Except the SCREAMS OF THE WOUNDED AND
DYING.
THE MEN
Know what they have to do. Start up the ropes. Into the
teeth of the German defenders.
MILLER
Back-straps his Thompson sub-machine gun. Starts climbing
with the first group.
THE CLIFF FACE
The Americans swarm up the ropes. Taking turns firing up at
the Germans.
MILLER SEES A STALLED CLIMBER
A soft-faced boy. Grabs him by the back of his collar.
Roughly yanks him up. Nearly choking him. They boy climbs
on.
5.
HALF-WAY
An American Private is HIT. FALLS, taking two others with
him. All three land on the rocks below. Another way to die.
NEAR THE TOP
Less steep. They leave the ropes. Free climb, scrambling up
the rocks.
MILLER
Joins half-a-dozen pinned down men. Others bottleneck behind
them. Miller scans the route and the defenders. Sees an open
gap. Deadly. Beyond is a protective overhang. With a clear
line to the top.
MILLER
That's the route.
Miller motions to six men huddled near him.
MILLER
(continuing)
GO!
THE SIX MEN
Take an instant to get ready. Then SCRAMBLE into the gap.
MILLER AND THE OTHERS
Do their best to cover them. POUR FIRE up at the Germans.
Bad angle. No Germans are hit.
THE SIX MEN
Are CUT TO RIBBONS by MACHINE GUN FIRE. All KILLED. They
fall to the rocks below. SARGE, mid-twenties, experienced,
Miller's right arm and best friend, dives into the rocks next
to Miller.
SARGE
That's a goddamned shooting
gallery, Captain.
MILLER
It's the only way.
MILLER
Turns to the next half-dozen men.
6.
MILLER
YOU'RE NEXT!
THE SECOND SIX
Move to the head of the gap. Miller moves for a better angle
against the machine guns. Calls to JACKSON, a tall, gangly
Southern country boy, sharp-shooter.
MILLER
JACKSON, PICK OFF A FEW OF THEM,
WILL YOU?
JACKSON
(heavy Southern
accent)
You betcha, Captain.
Miller signals others where to direct their cover fire.
Turns to the second six.
MILLER
GO!
THE SECOND SIX
Take deep breaths. Head into the gap.
MILLER AND OTHERS BLAST SURPRISING FIRE
JACKSON, NAILS a pair of Germans. MILLER CUTS DOWN two more.
SARGE gets one. Not enough.
THE SECOND SIX
Are RAKED BY MACHINE GUNS. All are KILLED.
MILLER
Turns, looking for the next six. His eyes fall on Sarge and
REIBEN who is a cynical, sharp, New Yorker. Reiben smiles.
REIBEN
(heavy Brooklyn
accent)
Captain, can I put in for a
transfer?
MILLER
Sure, meet me at the top, we'll
start the paperwork.
7.
THE THIRD SIX
Moves into place. Sarge and Miller exchange a look. They
both see the madness of what they're doing.
MILLER AND THE OTHERS
OPEN UP on the Germans.
MILLER
GO!
SARGE
Rolls his eyes, takes a breath. Scrambles into the gap. The
other five right behind.
IN THE GAP
BULLETS EVERYWHERE.
Three are HIT. Then another. POTATO MASHER GRENADES bounce
down. EXPLODE below. THE GERMAN MACHINE GUN swings toward
Sarge and Reiben. Miller sees them about to get it...
MILLER STEPS OUT INTO THE OPEN.
A perfect target. Captain's bars glinting. FIRING. TRYING
TO DRAW THE GERMAN FIRE.
THE GERMAN MACHINE GUNNER
SEES MILLER STANDING IN THE OPEN. Too much to pass up. He
swings the machine gun away from Sarge and Reiben, toward
Miller. A ROW OF GERMAN BULLETS approaches Miller...he's an
instant from death.
SARGE AND REIBEN DIVE
Under the overhang to safety.
MILLER DIVES BACK TO COVER, BARELY MAKES IT, HIS BOOT
HEAL IS BLOWN OFF.
UNDER THE OVERHANG Sarge and Reiben untangle themselves.
REIBEN
I'll be Goddamned! I'm not dead!
Sarge hollers back to Miller.
8.
SARGE
CAPTAIN, IF YOUR MOTHER SAW YOU DO
THAT, SHE'D BE VERY UPSET!
MILLER
I THOUGHT YOU WERE MY MOTHER.
Quick smiles. MILLER AND HIS RANGERS lean out and FIRE. HIT
more Germans.
SARGE AND REIBEN run up the path, under the overhang. Stop
near the top. Pull pins on grenades. Count. Both throw
long, arcing over the crest, perfectly aimed.
THE TWO GRENADES EXPLODE.
Put out the two worst machine gun nests.
MILLER
Crosses the gap. His men follow.
AT THE CREST
The Americans swarm over the top. FIRING. TWO DOZEN GERMANS
FIRE BACK as they retreat. Abandoning the perimeter defense
of the bunkers. The Germans are CUT DOWN.
MILLER motions to WADE, a small, wide-eyed, demolition man
who's struggling under the weight of half-a dozen satchel
charges.
MILLER
Okay, Wade, your turn.
WADE
Captain, I love it when you say
that.
Miller, Sarge, Reiben and Jackson cover Wade as he races to
the first of three bunkers. Dodging bullets from inside.
Wade tosses a SATCHEL CHARGE into a gun port. A HUGE,
MUFFLED EXPLOSION, rocks the bunker.
MILLER AND SARGE
Survey the field.
SARGE
What the hell were you doing?
Drawing fire!
9.
MILLER
Worked, didn't it?
SARGE
You tryin' to get yourself killed?
MILLER
Don't need to, the Krauts go that
covered.
Sarge shakes his head at Miller, then he looks over the cliff
at the scores of men, their shattered, burning bodies
covering the rocks and the beach below. He's clearly
affected.
Miller coldly glances at the dead and wounded. Then he moves
on, leading his surviving men toward the two remaining German
bunkers. The SOUNDS OF BIG GUNS and MACHINE GUNS FIRE
surround him.
DISSOLVE TO:
EXT. WAR DEPARTMENT BUILDING - DAY
The SOUND OF CLATTERING MACHINE GUN FIRE SEGUES TO that of
CLATTERING TYPEWRITERS. A huge government building stands in
the heart of Washington, D.C.
SUPERIMPOSITION:
WAR DEPARTMENT
WASHINGTON, D.C.
JUNE 8, 1944
INT. COMMUNICATIONS OFFICE - WAR DEPT. - DAY
Very busy. A dozen, somber military clerks work behind
desks, quickly and efficiently. No small talk.
A CLERK
Older than the others, sad-eyed, adds a sheet of paper to a
large pile in his out-box.
CLOSE SHOT
An outgoing telegram. It reads: "We regret to inform
you...killed in action...heroic service..." This is the
paperwork of death.
10.
THE CLERK
Pulls out a file. Reads. Finds something troubling.
Quickly shuffles through some other papers. Finds what he's
looking for. Rises from his desk and hurries out of the
office.
INT. LIEUTENANT'S OFFICE - WAR DEPT. - DAY
Seen through the glass wall. The clerk speaks to a YOUNG
LIEUTENANT who is visibly shaken by what he is being told.
He motions to the clerk to follow and he strides out of the
office with the clerk on his heels.
INT. CAPTAIN'S OFFICE - WAR DEPT. - DAY
Again, seen through a glass wall. The Young Lieutenant
speaks to a YOUNG CAPTAIN who, like the Lieutenant is clearly
bothered by what he's being told. The Captain takes the
papers from the Young Lieutenant and strides out.
INT. COLONEL'S OFFICE - WAR DEPT. - DAY
A busy office. Aides and secretaries scurry about. The
walls and tables are covered with maps of Normandy and
complex deployment charts. A ONE-ARMED COLONEL with a chest
full of ribbons pours himself another cup of coffee. He
clearly hasn't slept in a long time. The Young Captain, his
staff officer, walks in.
YOUNG CAPTAIN
Colonel, I've got something you
should know about.
ONE-ARMED COLONEL
Yes?
YOUNG CAPTAIN
Two brothers died in Normandy.
One at Omaha Beach, the other at
Utah. Last week in Guam a third
brother was killed in action. All
three telegrams went out this
morning. Their mother in Iowa is
getting all three telegrams this
afternoon.
The life drains from the Colonel. Others in the room hear
and freeze.
ONE-ARMED COLONEL
Oh, Jesus.
11.
YOUNG CAPTAIN
There's more. There's a fourth
brother. The youngest. He
parachuted in with the Hundred-andFirst Airborne the night before
the invasion. He's on the front.
ONE-ARMED COLONEL
Is he alive?
YOUNG CAPTAIN
We don't know.
The Colonel regains his bearings. Stands and motions curtly
to the Captain.
ONE-ARMED COLONEL
Come with me.
The Colonel strides from the room with the Captain on his
heels. The aides and secretaries watch them go.
EXT. FARM ROAD - IOWA - DAY
A black car drives along a dirt road, a cloud of dust rising
behind. Passing through an endless expanse of ripening corn.
EXT. RYAN FARM - IOWA - DAY
A whit farmhouse. A barn. A stand of trees. Cornfields as
far as the eye can see.
IN THE YARD
A tire swing. A bushel basket nailed to the barn over a dirt
basketball court.
A PORCH SWING
Sits empty. Moves slightly.
ON THE GLASS OF THE FRONT DOOR
Four American flag decals. Each one, a man in service.
MARGARET RYAN
Steps out. Around sixty. Her face shows the lines of a life
of hard work and mother hood. A good woman.
She wipes her hands on her apron and looks out across the
fields.
12.
Far in the distance she sees the dust rising behind the black
car.
She watches the car get closer, then sees it turn toward her
house. She starts to grow uneasy.
As the black car approaches, her breath comes hard. She
reaches out and steadies herself on the porch post.
The car pulls up to the house. She sees three men get out,
one wearing a clerical collar. The first of her tears come.
INT. GENERAL MARSHALL'S OFFICE - WAR DEPARTMENT - DAY
Another busy office filled with aides and secretaries.
GENERAL GEORGE MARSHALL, Army Chief of Staff, stands next to
his conference table, reading the Ryan brother' files. Halfa-dozen subordinates, among them the one-armed Colonel and
the Young Captain, wait. General Marshall puts down the file.
GENERAL MARSHALL
(softly)
Goddamn it.
ONE-ARMED COLONEL
All four of them were in the same
company in the 29th Infantry but
we split them up after the
Sullivan brothers died on the
Juneau.
GENERAL MARSHALL
Any contact with the fourth
brother, James?
ONE-ARMED COLONEL
No, sir. He was dropped about
thirty miles inland, near Ramelle.
That's still deep behind German
lines.
General Marshall hardens.
GENERAL MARSHALL
Well, if he's alive, we're going
to send someone to get him the
hell out of there.
That's just what the General's staff wanted to hear.
13.
EXT. NORMANDY - CRATER FIELD - DAY
NEAR CONSTANT MORTAR EXPLOSIONS. HEAVY MACHINE GUN FIRE.
Miller's Ranger company is pinned down by a superior force of
German troops. The Americans hug the bottoms of the craters,
FIRING BACK as best they can. BIG GUNS THUNDER in the
distance.
SUPERIMPOSITION:
NORMANDY
1300 HOURS
JUNE 9
MILLER
Trailed by a RADIOMAN, dashes through the fire and dives into
a sludge-filled crater. He surfaces, sees Sarge and Reiben,
and reels from a horrific smell. Their conversation is
repeatedly broken by FIRING And DUCKING GERMAN FIRE.
MILLER
Jesus Christ! What the hell are
we swimming in?
REIBEN
Shit, sir.
SARGE
Fertilizer, Captain, I think we're
in a cranberry bog.
REIBEN
Out of the frying pan, into the
fucking latrine.
MILLER
Look at the bright side, the
Krauts sure as hell don't want to
advance and hold this cesspool.
Miller barks to his RADIOMAN.
MILLER
(continuing)
Get Fire Control, we need some
artillery...
RADIOMAN
Trying, sir.
MORE EXPLOSIONS. They all duck. Reiben's worried.
14.
REIBEN
Sir, what if they send some other
company into Caen ahead of us
while we're pinned down here?
MILLER
Don't worry, we're the only
Rangers this side of the
continent, we've got to be first
into Caen.
SARGE
Who cares?
REIBEN
I care. Don't you know what
Caen's famous for, Sarge?
SARGE
Frogs?
REIBEN
Lingerie.
SARGE
Yeah? So?
THE GERMAN FIRE diminishes for an instant. Miller, Sarge and
Reiben immediately rise and POUR FIRE at the German
positions. GERMAN MACHINE GUN FIRE RESPONDS and they duck
down again.
REIBEN
So, you ever heard of employee
discounts?
My uncle sells shoes, gets twentyfive percent off everything in the
line, got a closet filled with the
best looking shoes you ever seen.
MORE MORTAR EXPLOSIONS.
REIBEN
Just picture some French number
been spending all day, every day,
making cream-colored, shear-body
negligees with gentle-lift silk
cups and gathered empire waists,
what the hell you think she wears
at night?
15.
MILLER
Reiben, how the hell do you know
so much about lingerie?
REIBEN
Lingerie is my life, sir. My
mother's got a shop in Brooklyn,
I grew up in it, from the time I
could crawl, we carry Caen
lingerie, it's the best there is,
it's all I been thinking about
since the invasion.
Another pause in the German shelling. Reiben rises and
BLASTS HIS B.A.R, then ducks as the GERMANS RETURN FIRE.
MILLER
There's a war on, good chance
they're not still making lingerie
in Caen.
REIBEN
Oh, Captain, they'll always make
lingerie, it's one of the three
basic needs of man -- food,
shelter, silk teddies.
MILLER
Dream on, Private.
REIBEN
Happy to, sir.
RADIOMAN
Captain, I've got Command, they
want you back at H.Q., right away.
MILLER
Maybe the war's over.
A MORTAR SHELL EXPLODES VERY CLOSE. After the debris stops
falling, Sarge and Reiben rise, spitting out sludge. Reiben
looks dubiously at Miller.
REIBEN
I don't think so, Captain.
MILLER
(to Radioman)
Stay at it until you get fire
control.
(more)
16.
MILLER (cont'd)
(to Sarge)
Keep 'em down, wait for the navy.
SARGE
Yes, sir.
Miller waits for a pause in the MORTAR BARRAGE, then
scrambles out of the crater and takes off in a crouch-run.
EXT. NORMANDY - FIELD H.Q. - 19TH INFANTRY - DAY
Chaos. Under fire. INTERMITTENT MORTARS, SOME BIG GERMAN
SHELLS and fairly close SMALL ARMS FIRE.
MILLER
Runs over the broken ground and makes it to the sandbagged
H.Q. He stumbles down the make-shift stairs.
INT. H.Q. SANDBAGGED BUNKER - DAY
Sand and dirt falls with the closest of the EXPLOSIONS which
continue through the scene. Miller salutes a Major.
MILLER
Miller, Company B, Second Rangers.
MAJOR
Go on in.
Miller goes deeper into the H.Q. bunker where he finds a
dozen officers with as many aides, runners and radiomen.
Very busy. A field map dominates the center of the small
space. The men in the room note Miller, a few nod to him
respectfully. He's clearly someone special.
COLONEL SAM ANDERSON is in command, talking on a field-phone.
He's about fifty, firm and steady, the calm at the eye of the
storm. He sees Miller and motions for him to wait.
COLONEL ANDERSON
(into field-phone)
...I understand your problem, but
if we don't get those tanks offloaded by 0600, we're going to
have an entire division up at Caen
with its ass hanging out of its
pants...
A LIEUTENANT steps up to Miller and hands him a sheet of
paper.
17.
LIEUTENANT
Captain, here's your company
address list.
MILLER
My what?
LIEUTENANT
For letters to the families of
your killed-in-action.
Miller hands the list back to the Lieutenant.
MILLER
Find a chaplain.
COLONEL ANDERSON
(into field-phone)
...alright, let me know when.
Anderson hangs up, speaks to an AIDE.
COLONEL ANDERSON
(continuing)
Have the Second and Third
Regiments hold at St. Michel until
we get those tanks.
AIDE
Yes, sir.
Colonel Anderson turns to Miller.
COLONEL ANDERSON
Report.
MILLER
Sector four is secured, we put out
the last three German one-fiftyfives, found them about two miles
in from Ponte du Hoc.
COLONEL ANDERSON
Resistance?
MILLER
A company, Wehrmacht, no
artillery, we took twenty-three
prisoners, turned them over to
intelligence.
18.
COLONEL ANDERSON
Casualties?
MILLER
Forty-four, twenty one dead.
An instant of SILENCE, all hear, none look.
MILLER
(continuing)
They didn't want to give up those
one-fifty-fives, sir.
COLONEL ANDERSON
It was a hard assignment, that's
why you got it.
MILLER
Yes, sir.
COLONEL ANDERSON
Where are your men now?
MILLER
Pinned down, a mile east of here,
waiting for some help from the
navy guns.
COLONEL ANDERSON
I'm sending Simpson to take over
for you, the division is going to
Caen, you're not coming with us,
I have something else for you.
MILLER
Sir?
COLONEL ANDERSON
There's a Private James Ryan who
parachuted in with the Hundred-andFirst near Ramelle. I want you to
take a squad up there. If he's
alive, bring him back to the beach
for debarkation. Take whoever you
need, you've got your pick of the
company.
MILLER
A Private, sir?
19.
COLONEL ANDERSON
He's the last of four brothers,
the other three were killed in
action. This is straight from the
Chief of Staff.
MILLER
But, sir...I...I...
COLONEL ANDERSON
Spit it out, Captain.
Miller hesitates, then:
MILLER
Respectfully, sir, sending men all
the way up to Ramelle to save one
Private doesn't make a fucking,
goddamned bit of sense.
(beat)
Sir.
The other officers freeze, listening without turning.
Colonel Anderson glares at Miller.
COLONEL ANDERSON
You think just because you hold
the Congressional Medal of Honor,
you can say any damn thing you
please to your superior officers?
Miller considers the question, then smiles.
MILLER
Yes, sir, more or less.
Colonel Anderson looks as if he's about to bit Miller's head
off, then he smiles, too.
COLONEL ANDERSON
Alright, I'll give you that.
Continue.
MILLER
The numbers don't make sense, sir.
His brothers are dead, that's too
bad, but they're out of the
equation. Sending men up there is
bleeding heart crapola from three
thousand miles away. One Private
is simply not worth a squad.
20.
COLONEL ANDERSON
This one is. He's worth a lot
more than that. Which is why I'm
sending you, you're the best field
officer there is.
Miller shrugs.
MILLER
Yes and no, sir, what about
Morgan? Fine officer, regular
church goer, writes poetry, he
might like a mission like this.
(beat)
And he's taller than me.
Colonel Anderson listens with amused tolerance, but it's time
to get back to business.
COLONEL ANDERSON
That's enough, Captain, you have
your orders. Major Thomas will
fill you in.
Miller knows when to back off. He salutes.
MILLER
Yes, sir.
Miller and Colonel Anderson exchange a private look.
COLONEL ANDERSON
Good luck, John.
MILLER
Thank you, sir.
Miller joins Major Thomas at one of the smaller map tables.
Colonel Anderson watches Miller for an instant, then notices
the other officers in the tent watching. A glare and they go
back to work.
EXT. BATTLESHIP - DAY
A MASSIVE BARRAGE of fifteen-inch shells BLASTS from the deck
of the enormous ship.
EXT. CRATER FIELD - CRANBERRY BOG - DAY
HUGE EXPLOSIONS. The big naval shells SLAM into the German
position on the far side of the cranberry bog crater field.
21.
IN THE CRATERS
Miller's Ranger company ducks and covers. The BARRAGE
SUBSIDES. The Rangers rise, FIRING, leap-frogging from
crater to crater, advancing against the remaining Germans who
return SMALL ARMS FIRE.
MILLER
Crouch-runs and dives into a crater with Sarge.
MILLER
Put on your traveling shoes,
Sarge, we're heading out.
SARGE
Caen?
MILLER
I wish. You and I are taking a
squad up to Ramelle on a public
relations mission.
SARGE
You? Leading a squad?
MILLER
Some Private up there lost three
brothers, got a ticket home.
SARGE
What about the company?
MILLER
Simpson.
SARGE
Simpson? Jesus Christ on a
fucking pogo stick!
MILLER
I want Reiben on B.A.R; Jackson
with his sniper rifle; Beasley,
demolition.
SARGE
Beasley's dead.
MILLER
Okay, Wade. Translators?
22.
SARGE
Fresh out.
MILLER
What about Talbot?
SARGE
Twenty minutes ago.
MILLER
Damn, I'll go see if I can find
another one. You get Reiben,
Jackson and Wade, meet me at
transport.
SARGE
Yes, sir.
They wait for a lull in the firing, then scramble out of the
crater and crouch-run in opposite directions.
EXT. TRANSPORT H.Q. - NINETEENTH INFANTRY - DAY
Just in from the beaches. DISTANT ARTILLERY AND EXPLOSIONS.
Nothing close. Dust. Confusion. Vehicles of every sort
moving out. Tanks, half-tracks, troop trucks. In the middle
of the mess, a cigar-chewing SUPPLY SERGEANT works at a makeshift desk made out of crate. He yells at a PRIVATE.
SUPPLY SERGEANT
GET THOSE GODDAMNED HALF-TRACKS
OUT OF THERE!
PRIVATE
They're blocked in!
SUPPLY SERGEANT
THEN UNBLOCK 'EM!
SARGE, REIBEN, JACKSON AND WADE
Wait nearby. Reiben is beside himself, pacing, muttering.
The others are relaxed.
MILLER
Strides through the chaos, avoiding the passing vehicles. He
sees his men and walks toward them. Reiben hurries up to
Miller, pleading.
23.
REIBEN
Please, sir, you can't take me to
Ramelle, I gotta go to Caen, sir,
please, I told you, they make Caen
lingerie there, it's beautiful,
it's the best there is, it's...oh,
please, sir...
MILLER
Sorry, I need a B.A.R. man, you're
the best.
REIBEN
(desperate)
No, I'm not, Kaback is, honest.
Or what about Faulkner? Or that
little guy with the glasses?
MILLER
Trust me, you're the best.
REIBEN
(whimpering)
But, sir...
Miller jerks his head for his men to follow and he strides
off toward the Supply Sergeant's table. Sarge falls in next
to Miller.
SARGE
You get a translator, Captain?
MILLER
I've got a line on one.
TRANSPORT OPERATIONS TABLE
Chaos. Vehicles THUNDERING by. The Supply Sergeant juggles
runners and paperwork. Miller steps up to him.
MILLER
Sergeant, I need a truck.
SUPPLY SERGEANT
Sorry, sir, fresh out of trucks,
how 'bout a '38 Ford Roadster,
hard-top, red with black interior.
MILLER
White-walls?
24.
SUPPLY SERGEANT
No white-walls, sir, there's a war
on.
(to the Private)
NOT THERE, YOU GODDAMNED IDIOT,
OVER THERE!
(to Miller)
I can't help you, sir.
MILLER
A half-track, anything.
SUPPLY SERGEANT
Sorry, sir. Division is using
everything on wheels to get up to
Caen.
(notices Miller's
shoulder patch)
How come you guys aren't going?
Miller ignores the question. He
spies a jeep.
MILLER
How about that jeep?
SUPPLY SERGEANT
That's General Gavin's. His lap
dog told me if anyone breathes on
it, I'll get busted and if anyone
so much as touches it with their
little finger, I'll get court
marshaled. If you were to take
it, they'd shoot me.
JACKSON
Cap'n, does that mean we got to
walk all the way up to Ramelle?
SUPPLY SERGEANT
What's at Ramelle beside a lot of
Germans.
MILLER
A paratrooper named Ryan. He's
going home, if he's alive.
SUPPLY SERGEANT
Senator's son?
25.
MILLER
No, three brothers of his were
killed in action. Command wants
him out of there.
The Supply Sergeant grunts as if punched in the belly.
SUPPLY SERGEANT
Damn...I got a couple brothers...
Miller looks at him, noting his reaction coldly. The Supply
Sergeant shifts his eyes toward General Gavin's jeep.
EXT. ROAD LEADING FROM TRANSPORT - DAY
Miller and his men drive off, fast, in General Gavin's jeep.
Sarge is at the wheel, weaving and bouncing through the
bedlam of men and vehicles. Miller rides shotgun. Reiben,
Jackson and Wade are crammed in the back.
The SUPPLY SERGEANT
Watches them go. Behind him, GENERAL GAVIN, pure piss and
vinegar, strides up, trailed by his huge staff. He looks
around for his jeep, comes up empty.
GENERAL GAVIN
SERGEANT, WHERE THE HELL IS MY
GODDAMNED JEEP!?
The Supply Sergeant puffs his cigar with a smile and turns to
take his lumps.
EXT. ROAD - DAY
Miller and his men weave through the chaos of the American
staging area.
MILLER
We've got to make one stop.
Miller points the way for Sarge.
EXT. INTELLIGENCE TENT - DAY
Miller and his men skid to a stop in front of a perfectly
white, taut-lined tent. A steady stream of ROARING vehicles
and CHATTERING men move out around them. DISTANT GUNS
RUMBLE. SPORADIC MEDIUM-DISTANCE EXPLOSIONS BOOM. Miller
hops out.
26.
MILLER
Wait here.
He strides into the tent.
INT. INTELLIGENCE TENT - DAY
Three bookish corporals hover over map tables like studious
nerds the day before finals. They're breaking down and
gridding field maps and covering them in plasticine.
Tedious, detailed work.
One of them is TIM UPHAM, a thin, twenty-four year old,
patrician with gentle, thoughtful eyes behind his thick
glasses. He nervously jumps at the sound of a VERY DISTANT
EXPLOSION, then he forces himself to concentrate on his work.
Miller strides in.
MILLER
I'm looking for Corporal Upham.
Upham raises his eyes from his map and re-focuses.
UPHAM
Sir, I'm Upham.
MILLER
I understand you speak French and
German.
UPHAM
Yes, sir.
MILLER
Do you have an accent?
UPHAM
A slight one in French. My German
is clean. It has a touch of the
Bavarian.
MILLER
Good, you've been re-assigned to
me, we're going to Ramelle.
Upham knows enough geography to know what that means.
UPHAM
Uh, sir, there are Germans up at
Ramelle.
27.
MILLER
That's my understanding.
UPHAM
Lots of them.
MILLER
Do you have a problem with that,
Corporal?
UPHAM
Sir, I've never been in combat.
I make maps. I translate.
MILLER
I need a translator, all mine have
been killed.
UPHAM
But, sir, I haven't held a gun
since basic training.
MILLER
It'll come back to you. Get your
gear.
Upham hesitates.
UPHAM
Sir, may I bring my typewriter?
Miller looks at him closely, not sure if he's joking.
UPHAM
(continuing)
I'm writing a book and I...
Miller's expression gives him his answer.
UPHAM
(continuing)
Uh, how about a pencil?
MILLER
A small one.
Miller shoos him off.
MILLER
(continuing)
Go, go...
28.
Upham scurries away. Miller sighs.
EXT. ROAD LEADING FROM INTELLIGENCE TENT - DAY
Miller and his men peel out, now with Upham crammed with the
others in the back of the jeep. As they drive off, the
CAMERA CRANES UP to reveal the vast tableau of the biggest
invasion in military history.
The scope of the operation is stunning. The beach is covered
with mountains of supplies. A steady stream of vehicles
winds up the dunes. Hundreds of barrage balloons, anchored
by heavy steel cables, hover over the entire scene. Offshore, a massive Mulberry port is under construction, workers
swarming over it like ants. Beyond that, thousands of ships
and boats of every type and description. The smoke of
hundreds of fires rises on the horizon. EXPLOSIONS, some
distant, some close, BOOM and RUMBLE.
It's an awesome, breathtaking sight. Miller and his tiny
band of men, weave their way through the middle of it,
speeding away from the beach, heading inland, leaving the
bulk of the American Army behind.
EXT. FRENCH ROAD - DAY
Miller and his men drive fast passing American vehicles and
infantrymen moving forward. The sides of the road are
littered with the debris of burning German vehicles,
abandoned equipment, bodies.
Sarge drives. Miller reads a map. Upham, cradling a
pristine M-1 rifle, is all eyes and ears. Jackson and Wade
calmly take in the view. Reiben checks out the close
quarters in the back of the jeep.
REIBEN
Captain, can I ask you a question?
MILLER
Sure, Reiben.
REIBEN
Where are you planning on putting
Private Ryan, sir?
Miller doesn't raise his eyes from the map.
29.
REIBEN
(continuing)
It's just that it's kind of
crowded back here, I was wondering
if you're expecting to have more
room on the way back?
Miller points out a turn to Sarge.
MILLER
Left.
Sarge makes the turn. Miller folds up the map and pockets it.
MILLER
(continuing)
Now we've got a straight shot, due
north, to Ramelle, twenty-six
miles, two villages between here
and there, St. Mere, then Bernay.
We'll take the jeep as far as we
can, then go on foot.
SARGE
We in radio contact with anybody
up there?
MILLER
Somebody put the wrong crystals in
every one of the Hundred-andFirst's radios the night before
the drop, not one of them works.
We're going in blind.
REIBEN
I usually like surprises.
SARGE
What are we likely to run into?
MILLER
A fucking mess, two maybe three
Kraut divisions, no fronts, no
lines, the drops were completely
fouled up, we've got little
pockets of paratroopers all over
the place, trying to hang on.
Command says we hold St. Mere, but
north of that, it's all Krauts.
Even if Ryan's where he's supposed
to be, he's more than likely dead.
30.
SARGE
Hell of a mission.
MILLER
Yep, hell of a mission.
IN THE BACK OF THE JEEP
Upham avidly takes in everything. He notices Reiben staring
at him, grows nervous under his look and offers a hopeful
smile.
UPHAM
Hi. So, uh, you're all Rangers?
Reiben, Jackson and Wade look at Upham as if he were an
insect.
UPHAM
(continuing)
I'm Upham.
(pointing at his
corporal's stripes)
Ignore these, please, I know all
that breaks down in combat.
Their jaws drop.
REIBEN
(to Wade)
You want to shoot him, or should I?
WADE
It's not my turn.
REIBEN
(politely)
Jackson?
JACKSON
Hell, no, last time I shot a
Corporal, Cap'n Miller near bit my
head off.
Upham reacts to the mention of Miller's name.
UPHAM
Miller?
31.
MILLER
I don't want anybody to shoot him,
that's an order. He speaks French
and his German has a touch of the
Bavarian.
UPHAM
Sir, are you Captain John Miller?
Miller sighs, he knows what's coming.
UPHAM
(continuing)
...who won the Congressional Medal
of Hon...?
Upham's words are frozen in his throat by the warning glances
of Miller's men. Miller himself remains relaxed but stonefaced.
No one speaks for a few seconds, then the moment passes as if
it had never happened.
REIBEN
Captain, I gotta tell you, the
irony of this mission is fucking
killing me.
MILLER
Yeah, how so?
REIBEN
I should be on my way to Caen,
sir. It's like Beethoven, the
guy's one of the greatest
composers ever lived and he goes
deaf. Go figure, I mean, who'd he
piss off? And here I am, the
Beethoven of ladies foundation
garments, one step away from Caen,
the center of the known lingerie
universe and instead, I'm going to
Ramelle to save some fucking
Private who's probably already
dead.
MILLER
There's to be a bright side, look
for it.
32.
REIBEN
Sir, you know what Ramelle is
famous for? Cheese. The rest of
the company is going to Caen and
we're going to the goddamned
cheese capital of France. There
is no bright side.
MILLER
There's always a bright side.
REIBEN
I'm listening, sir.
MILLER
Well, I, for one, like cheese.
Wade pipes up cheerfully.
WADE
Hell, I don't mind going to
Ramelle, as long as there's
something up there for me to blow
up.
REIBEN
Well, you're a happy idiot.
THEY ROUND A TURN
Skid to a stop at a:
BOTTLENECK OF AMERICAN VEHICLES
A LIEUTENANT is roadmaster. Miller calls to him.
MILLER
How's the road up to St. Mere?
LIEUTENANT
Bad, sir. There're some eightyeights hiding somewhere, knocking
the hell out of our traffic.
MILLER
Anybody getting through?
LIEUTENANT
The lucky ones.
Miller nods to Sarge who floors it. They take off, spraying
gravel behind them.
33.
EXT. ST. MERE ROAD - DAY
The jeep barrels down the road, fast. The road is pockmarked with craters. They pass the wreckage of a pair of
American jeeps. Direct hits. Sarge swerves around them
without slowing.
AN AMERICAN TROOP TRUCK SMOLDERS
On the side of the road, surrounded by the charred bodies of
a dozen American troops. It's a nightmare vision. Upham
grows weak at the sight. Miller takes note of Upham's
reaction.
IN THE BACK
The men bounce up and down like stuffed animals, doing their
best to not be thrown out.
REIBEN
Hell, this is better than Coney
Island!
A HUGE BUMP
Bounces Reiben up and slams his back down on his shovel. He
HOLLERS IN PAIN.
MILLER
Just trying to make room for Ryan.
Reiben shoots Miller a smile and shifts his belt, moving his
shovel from under his bruised ass.
THEY ROUND A BEND
See a long, straight stretch of road. Half-a-dozen burning,
obliterated American vehicles. A gauntlet to run.
AN EIGHTY-EIGHT SHELL SCREAMS IN
Lands right behind them. BLOWS A NEW CRATER
MILLER
(sweetly)
Sarge?
SARGE FLOORS IT. Everyone hangs on.
ANOTHER SHELL EXPLODES
Thirty yards ahead of them.
34.
MILLER
Directs Sarge off the road.
MILLER
They've got the road zeroed.
SARGE
Yanks the wheel, driving the jeep off the road.
THE JEEP BOUNCES
Off the shoulder. Nearly throwing everyone out. Somehow
they hang on. The jeep tears along the rutted field.
ANOTHER EXPLOSION
Just behind them.
SARGE DRIVES MADLY
Not slowing down. Trying to avoid the biggest ruts and bumps.
ANOTHER EXPLOSION
Close on their side. Showers them with debris.
SARGE
Jesus Christ!
MILLER SCANS THE TERRAIN
Sees a cluster of buildings about half-a-mile ahead.
MILLER
They've got a hell of a spotter
somewhere.
ANOTHER EXPLOSION
Even closer. The jeep's PEPPERED WITH SHRAPNEL. They BARREL
THROUGH the smoke.
MILLER
S-curves, Sarge.
SARGE
Turns shallow curves without slowing down.
35.
SUDDENLY SEES A CRATER
Tries to avoid it. Too late. Brakes. PLOWS into overturned
earth. STOPS SHORT.
REIBEN, UPHAM, WADE AND JACKSON
THROWN from the jeep. TUMBLE into the dirt. Not hurt.
SARGE AND MILLER
Hang on. Stay in the jeep but are battered. All stunned.
MILLER
Is first to regain his bearings. Jumps up. Checks out the
jeep. Undamaged. Deep in the soft dirt.
AN EIGHTY-EIGHT SHELL SCREAMS IN
EXPLODES THIRTY YARDS LEFT
MILLER
Sarge! Reverse!
Sarge puts his head back on and throws the jeep into gear.
The wheels spin. Miller throws his shoulder into the jeep.
Yells to the others.
MILLER
(continuing)
COME ON! YOU WANNA WALK?
STILL DAZED
Reiben, Wade, Jackson, Upham screw their heads back on.
Shoulder into the jeep. Push for all they're worth. The
WHEELS STILL SPIN.
ANOTHER EIGHTY-EIGHT SHELL LANDS EXPLODES THIRTY YARDS
RIGHT
MILLER IGNORES IT
He's the only one who does.
SARGE
Captain, they got us zeroed.
Upham is very nervous.
36.
UPHAM
That's bracketing, right?
They all ignore him.
UPHAM
(continuing)
I know about bracketing. I read
about it. The next one is going
to land right on us.
MILLER
FORWARD! FORWARD!
(beat)
NOW REVERSE!
Sarge SLAMS THE JEEP INTO REVERSE. Rocks it. SLAMS IT BACK
INTO FORWARD. Makes progress.
ALL THE MEN PUSH, ALL EYES UP. WAITING FOR THE NEXT
SHELL.
SARGE
Uh, Captain...
MILLER
PUSH!
SARGE
Uh, Captain...
THE TIRES SCREAM
A bit more progress. It's almost out.
THEY ALL PUSH LIKE MANIACS
Knowing the shell is coming any second. Upham is beside
himself.
SARGE
(sweetly)
Oh, Captain...
ONE MORE PUSH
The jeep rocks back in, deeper.
MILLER
SHIT!
THEY HEAR THE SCREAM OF THE SHELL
37.
MILLER BARKS TO HIS MEN
MILLER
GO!
THE MEN
Instantly take off. Away from the jeep. As fast as they can.
THE SHELL SCREAMS IN
The men hit the dirt.
DIRECT HIT
OBLITERATING THE JEEP
THE MEN
Barely out of the BLAST PERIMETER. STUNNED by the
concussion. SHOWERED with dirt, rock and debris.
MILLER
Is first up. Sarge and the men struggle to their feet. Hear
MORE INCOMING. Miller grabs Upham by the collar and pulls
him up.
MILLER
HERE COME THE MORTARS!
THEY ALL TAKE OFF
Running as fast as they can.
THE FIRST OF THE MORTAR SHELLS COME IN
The eighty-eight is big, with pauses spaces between. But
there must be a dozen mortars firing. The shells are almost
constant.
THE FIELD
The six Americans run madly, in zig-zag patterns through the
gauntlet of MORTAR EXPLOSIONS.
BOOM
RUNNING, STUMBLING
BOOM, BOOM, BOOM
38.
UPHAM IS THROWN TO THE GROUND
Miller yanks him up. Half-drags him to the edge of the field.
THEY MAKE IT TO THE TREES
Keep running. Through the bushes and brambles. Thirty yards
in.
THE EXPLOSIONS STOP
THE MEN ALL STOP
Panting. Struggling to catch their breath. Check their body
parts. Everything's there. They have their weapons, most of
their gear.
Reiben looks back through the trees at THE JEEP, which is
nothing more than a burning carcass. He shakes his head.
REIBEN
General Gavin is going to be very
irritated at you, Captain.
MILLER
Stands on the edge of the woods, almost in a trance.
UPHAM
Captain, I...
SARGE
Sssssh!
Miller, far away, quickly shifts his eyes and ears from
position to position.
MILLER
Sarge, maps.
Sarge quickly opens up the map case. The men are dead
silent, frozen in place.
MILLER
(continuing)
Two eighty-eights, just under twoand-a-half miles, that way, vector
from the jeep, through those two
trees at the base of the hill.
The mortars came from behind that
rise, there, four of them.
39.
Sarge quickly starts vectoring on the map. Miller snaps out
of it.
MILLER
(continuing)
Wade, the radio.
Wade instantly starts cranking it up. Upham is amazed.
UPHAM
You can tell all that, just by the
sound, sir?
MILLER
That's not all. There were nine
gunners on the eighty-eights, one
had a broken heel on his boot, two
had bratwurst for supper last
night, one of them is named Fritz,
the other, Hans, maybe, I don't
know, it's hard to tell.
JACKSON
Corporal, you have just seen one
of Captain Miller's many God-given
talents. If, by some miracle, you
survive, you will witness many
more of them.
Sarge finished vectoring.
SARGE
Got it, sir. We gonna go take
care of those eighty-eights?
MILLER
That's not what we're here for.
WADE
(re: radio)
I've got command, Captain.
Miller takes the handset from Wade and the map from Sarge.
MILLER
(into radio)
This is Baker Charley One, fire
mark, sector three, foxtrot
quadrant, four-three by bakerthree. Two eighty-eights.
(more)
40.
MILLER (cont'd)
Tell our boys to come in low from
the east in case the Krauts have
ack-ack. Good hunting. Over.
A VOICE ON THE RADIO SIGNS OFF through the static. Wade
packs up the radio. Miller folds up the map.
JACKSON
sir, wouldn't take us but a minute
to put out them eighty-eights.
SARGE
He's right, Captain, it might be
kind of dangerous for those
flyboys.
MILLER
Tell that to Private James Ryan.
We've got our orders. Let's go.
Miller heads off without pausing or looking back. The rest
of the men don't like it, but they follow. Upham trails,
amazed at Miller.
EXT. WOODS - DAY
Miller walks point. His men follow warily. Upham falls in
alongside Reiben.
UPHAM
So, where are you from?
REIBEN
Get lost.
Upham smiles lamely and moves on to Jackson.
UPHAM
So, where are you from?
JACKSON
You writin' a book or somethin'?
UPHAM
As a matter of fact, I am.
JACKSON
Figured.
Wade overhears and smiles at Upham.
41.
WADE
I'm Wade, that's spelled, W-A-D-E,
I'm small but wiry, with piercing,
steel-gray eyes, and a rough-hewn
but handsome face, I'm from
Colorado, my father's a mining
engineer, don't you take notes?
Upham shakes his head.
UPHAM
Demolition, right?
WADE
Since I was nine years old. They
got a lot of explosives around
mines. Me and my little brother
could get into any warehouse you
ever saw. Damn, we had fun!
Jackson shrugs.
JACKSON
I'm Jackson. I'm from West Fork,
Tennessee. My pappy's a preacher.
Him and his two brothers got a
ministry, The Blessed Church of
the Wandering Gospel.
UPHAM
In West Fork?
JACKSON
In the back of a nineteen and
thirty-one stretch Hudson with a
big ole' trailer.
UPHAM
No kidding.
JACKSON
I don't make jokes about things
of, or related to, the preaching
of the Holy Gospel, including the
ministerial calling of my family.
UPHAM
So they travel around from place
to place and preach?
42.
JACKSON
We got us a tent, forty-two feet
across, eighteen feet at center,
hundred-and-ten foldin' chairs.
Circuit's eleven towns, covers all
'a Hasset County and most 'a
Weller County. I expect that upon
completion of my military service
I will be joinin' said ministry.
UPHAM
What about the Captain? Where's
he from?
They all shake their heads. Miller's out of earshot.
JACKSON
You figure that out, you got
yourself one nice prize.
SARGE
Over three hundred bucks, last I
heard.
WADE
Company's got a pool, five bucks
gets you in, whoever guesses where
the Captain's from and what he did
as a civilian gets it all.
JACKSON
The whole kit and caboodle.
UPHAM
But everybody's heard of him, he
won the Congressional Medal of
Honor, he saved a dozen men.
REIBEN
We know.
UPHAM
Somebody must know where he's
from, what he did for a living.
SARGE
Somebody probably does.
UPHAM
Why don't you just ask him?
43.
JACKSON
The Captain prefers not to discuss
certain aspects of his life, in
particular, everything up to and
including his enlistment in the
United States Army.
SARGE
I've been with him since Anzio.
I'm closer to him that I am to my
own brother but I don't even know
what state he's from. Somewhere
in the Northeast as near as I can
figure. I don't even have a clue
what he did for a living as
civilian.
Reiben shakes his head.
REIBEN
No one's gonna win the money for
the simple reason that the Captain
never was a civilian. They
assembled him at O.C.S. out of
spare body parts from dead G.I.'s.
I know this for a fact.
JACKSON
(defensively)
You got somethin' against the
Cap'n?
REIBEN
Hell, no. I think he's the best
officer in the whole goddamned
army, bar none.
They all nod in assent, no argument there.
JACKSON
You got that right.
Miller walks on ahead, unaware of their conversation. Upham
watches Miller, with even more curiosity.
EXT. HEDGEROW FIELD - DAY
Miller and his men walk along a hedgerow that parallels a
country cow path. They're staying close to the cover of the
brush. Miller walks tall now.
44.
JACKSON
Captain, my feet are most
uncomfortable. If I'd 'a known we
was gonna have to walk all the way
to Ramelle, I never would 'a
volunteered for this here mission.
MILLER
You didn't volunteer, Jackson.
JACKSON
I most likely would have, sir, had
I been given the opportunity.
REIBEN
If we find Ryan and he's still
alive, that son-of-a-bitch is
gonna carry this goddamned B.A.R.
back to the beach for me.
JACKSON
Army life is too danm easy, my
feet have gone soft. Back home,
we go out squirrel huntin', I walk
forever and a day and then some,
don't even raise a blister.
REIBEN
You know what a B.A.R. weighs?
Nineteen and a half pounds, not
counting ammo.
(re: ammo bandoleers)
And you think these things are
comfortable? They may look good
but they weigh twelve pounds each,
that's thirty-six pounds, right
there.
WADE
So what? I've got three satchel
charges, six gammon grenades, a
dozen-and-a-half pineapples, and
all my regular gear. You don't
hear me complaining.
REIBEN
That's because, as I have pointed
out on numerous occasions, you are
a happy idiot.
45.
WADE
No, I just happen to take the
Captain's advice and look at the
bright side of things.
UPHAM
How do you do it?
WADE
It's easy, it runs in my family,
take my grandfather, for example...
REIBEN
Oh, Christ, now we gotta listen to
that grandfather thing again.
WADE
As I was saying, before I was so
rudely interrupted, my grandfather
got old, as grandfathers tend to
do. He needed someone to take
care of him. We move around all
the time, going from one mine to
another, so we had to put him in
a home. Nice enough place but
kind of depressing. But not for
Granddad. He just convinced
himself he was on a cruise ship,
going to Tahiti, he had his own
cabin, first class, with room
service. It just so happened that
the weather was always lousy, so
he never bothered to go up on
deck. Happiest guy you ever saw
until the day he died.
UPHAM
You think he really believed it?
WADE
Who knows? It worked.
REIBEN
Fine, you convince yourself you
got a pack full of feathers and
goddamned Private James Ryan can
carry my fucking gear.
WADE
Reiben, you can be very unpleasant
to be around sometimes.
46.
REIBEN
You want unpleasant? Just wait,
I can do much better than this.
WADE
Look at Upham, you don't hear him
complaining.
Upham, feeling bold and a bit naughty, decides to give it a
shot.
UPHAM
Well, as a matter of fact, I was
just thinking...
The men roll their eyes, expecting the worst.
UPHAM
(continuing)
That I'm so fucking tired of this
goddamned walking, I'd pay a
thousand dollars to see that
bastard Ryan crawl on his belly
over an acre of broken glass to
hear my great-aunt Martha fart
through a field-phone.
The men are stunned.
REIBEN
Jesus Christ, he's a natural!
MILLER
Upham, are you sure you've never
been in combat?
Upham wiggles with pride.
UPHAM
Positive, sir, I'm certain I'd
remember.
Miller eyes Upham respectfully and nods to the men.
MILLER
He's good.
They walk on.
JACKSON
Cap'n, my feet are most
uncomfortable.
47.
Miller smiles, situation normal.
EXT. ST. MERE - LATE AFTERNOON
A small town has been reduced to rubble and is still an
active battlefield. HEAVY SMALL ARMS FIRE. GRENADE AND
MORTAR EXPLOSIONS. MEDIUM ARTILLERY BEYOND. American
soldiers crouch in doorways, FIRING at well-placed Germans.
Some French civilians dash across a street. A man and a
couple of women, one carrying a child. They make it across
and disappear into the remains of a building.
Miller runs up and flattens himself against a wall at a
corner. Sarge and the other men follow in leap-frog, spread
out down the block behind him.
Miller glances around the corner, taking a quick mental
picture of a GATHERING OF G.I.'s crouching in the cover of an
alley across the street and down the block. They are CAPTAIN
HAMILL, about Miller's age, and HIS MEN.
As Miller ducks back behind the corner, A GERMAN BULLET
SMASHES into the bricks where his head was an instant before.
Miller motions Jackson across first.
MILLER
Stay low.
Jackson gathers himself, takes off. GERMAN BULLETS BLAST,
kicking up the cobblestone behind him. Jackson zig-zags and
makes it to the cover of the far side.
JACKSON
Dang! That was close!
Miller nods to Upham.
MILLER
Your turn.
Upham, scared shitless, doesn't move. Miller speaks to him
very gently.
MILLER
(continuing)
Zig-zag, change your pace a couple
times, you'll be alright.
Upham's frozen. He can barely breathe. Miller sighs.
48.
MILLER
(continuing)
Okay, I'm going to draw fire for
you.
(sternly)
But if I do, you goddamned well
better go.
Upham nods. Miller gathers himself, takes a deep breath.
CLOSE SHOT: MILLER'S HAND quivers.
MILLER
Looks to Upham.
MILLER
Ready?
Upham nods, still terrified.
MILLER STEPS INTO THE OPEN
Stands motionless, presenting himself to the German snipers.
MILLER
Go.
Upham runs.
A GERMAN BULLET HITS THE BRICKS NEAR MILLER.
He doesn't budge. UPHAM TEARS ACROSS THE STREET very, very
fast. REIBEN watches Upham run.
REIBEN
Hey, that guy can move.
A GERMAN BULLET WHIZZES PAST Miller's ear.
UPHAM gets to the far side.
MILLER DUCKS BACK around the corner. Reiben and Wade don't
even react to what Miller has just done. Sarge is pissed.
He shakes his head at Miller, like an irritated parent.
SARGE
(under his breath so
only Miller can hear)
Damn fool.
(beat)
Sir.
49.
REIBEN
Captain, he's fast!
MILLER
(glances at Sarge,
speaks to Reiben)
Glad of it.
UPHAM
On the other side of the street, crouches in a doorway with
Jackson. Upham is a bit in shock, less from the nearness of
the bullets than from what Miller just did for him.
MILLER
DASHES across the street.
GERMAN BULLETS TRAIL HIM, shattering the cobblestones, inches
behind him. HE MAKES IT across. Calls back to Sarge.
MILLER
Bring 'em over.
UPHAM, tries to thank Miller.
UPHAM
Captain, I...
Miller ignores him, motions to Sarge, Reiben and Wade.
MILLER
One at a time.
MILLER
Ducks out of the doorway and crouch-runs down the block. He
passes a:
BOMBED OUT BUILDING
Out of the line of fire. A dozen dead American soldiers
lined up on the ground. The battered, bloody bodies, only
partially covered by ponchos.
Some badly wounded G.I.'s are being treated next to the dead.
Blood puddles have spread out onto the sidewalk.
MILLER
Sees the dead and wounded, shows no reaction. Runs to:
50.
AN ALLEY
Captain Hamill and his men are bunched there, out of the line
of fire. He's sending off a squad to continue their door-todoor.
CAPTAIN HAMILL
Fundamentals, short runs, double
up at the corners, one man close,
one man wide. Be careful. Go.
The squad takes off. Captain Hamill sees Miller. The two
captains glance at the bars on their shoulders, then speak
familiarly.
CAPTAIN HAMILL
(continuing)
How was the road in?
MILLER
We had a jeep until a few hours
ago, a nice one, it had a cute
little flag with a couple of stars
on it.
CAPTAIN HAMILL
Oh, what a shame.
One by one, Miller's men join them in the alley.
MILLER
We called in a strike on the
eighty-eights that took it out,
but it's the Kraut spotter that
counts, wherever the hell that
bastard is.
Captain Hamill points across a wide field toward a distant
chateau that has a private chapel with a fifty-foot steeple.
CAPTAIN HAMILL
That's where your boy is. We've
been trying to get him since this
morning. He killed two of my men
trying to get close enough for a
shot.
Miller eyes the distant steeple.
MILLER
Jackson.
51.
Jackson steps up. Miller points to the steeple. Jackson
knows what he's supposed to do. He puts down his M-1 and
takes off the long, zippered, leather sheath, strapped to his
back.
He spits a massive bullet of tobacco juice, then calmly and
methodically unzips his leather case and pulls out a very
unusual, long-barrel, rifle.
Miller and his men give him some room. Hamill and his men,
along with Upham, watch curiously.
Jackson opens a two-foot tripod with a flick of his wrist,
sits down and carefully attaches the rifle to it. Then he
takes a scope from a narrow wooden box and mounts it. He
adjusts the eye-piece and clicks in the bolt-action. Upham
is fascinated.
UPHAM
What is that?
Jackson pulls back the bolt and loads a single, over-sized
shell.
JACKSON
Thirty-ought-six, Norton longbarrel with dual-groove, parallel
rifling, elevated three-glass
scope and a single-throw hammer.
UPHAM
The Army gave you that?
JACKSON
Yep.
UPHAM
You must be a hell a shot.
JACKSON
Not where I come from.
Jackson sights on a tree about a thousand yards away and
FIRES. Evaluates. Calibrates the scope. He re-loads.
Jackson FIRES AGAIN. Evaluates. Perfect. He wipes the dirt
and sweat from his forehead, puts his eye to the sight and
waits, absolutely motionless.
UPHAM
That must be four thousand yards.
52.
JACKSON
(without taking his
eye from the scope)
Forty-two-hundred, I figure.
UPHAM
You take account of the wind?
Jackson doesn't dignify that with an answer but he looks back
with an expression that clearly says, "What are you, some
kind of fucking idiot?"
Reiben puts himself between Upham and Jackson.
REIBEN
(put-on Southern
accent)
Dang right, he take 'count of the
wind, ain't ya'll ever heard a
Kentucky windage?
Jackson keeps his eye to the scope and his finger on the
trigger.
JACKSON
Reiben, how many time I got to
tell you, I'm from Tennessee.
REIBEN
They got squirrels there, too,
right?
Jackson FIRES. Waits. A tiny smile. He starts taking apart
the rifle. A very impressed Captain Hamill barks to his
radioman.
CAPTAIN HAMILL
Get a hold of Command, tell them
the St. Mere road is open.
The Radioman cranks up his radio. Captain Hamill turns to
Miller.
CAPTAIN HAMILL
(continuing)
How far back is the rest of
division?
MILLER
Very far, they're not coming this
way, they're going to take Caen
first.
53.
CAPTAIN HAMILL
Goddamn it, I was afraid of that.
We're in a lot of trouble up here,
and it's gonna get worse before it
gets better. How many men did you
bring?
MILLER
Five, but we not staying, we're on
our way to Ramelle.
CAPTAIN HAMILL
Shit, are you the guys going up to
find Private Ryan?
MILLER
Yeah, you know about that?
CAPTAIN HAMILL
Command radioed, wanted to know if
he came in with the early wounded
or dead.
Several of CAPTAIN HAMILL'S MEN, among them a GENTLE-FACED
PRIVATE, prick up their ears at the mention of Private Ryan.
CAPTAIN HAMILL
(continuing)
We're supposed to tell you, they
intercepted a German transmission
after you left. The Krauts have
two companies on their way to
Ramelle to take back that bridge,
they'll be there sometime late
tomorrow.
MILLER
Wonderful.
CAPTAIN HAMILL
If Ryan's alive, you'd better get
him the hell out of there before
those Krauts show up.
MILLER
How do we get out of here?
CAPTAIN HAMILL
You don't, until tonight, we're
hemmed in real tight. After dark
you try to slip out to the east.
(more)
54.
CAPTAIN HAMILL (cont'd)
If you tip-toe, stay off the main
roads and roll a few sevens,
you've got a fair chance of making
it up to Ramelle by tomorrow night.
Miller processes the information. Captain Hamill shakes his
head.
CAPTAIN HAMILL
(continuing)
Tough, huh? Three brothers?
Miller shrugs.
CAPTAIN HAMILL
(continuing)
We sure as hell could use your
help here, but I understand what
you're doing?
MILLER
Yeah?
CAPTAIN HAMILL
Good luck.
MILLER
Thanks.
CAPTAIN HAMILL
I mean it. Find him. Get him
home.
Miller is a bit taken aback by Captain Hamill's forceful
sincerity. Then he shakes it off and motions to his men.
MILLER
Let's find someplace to hole up.
Miller nods to Captain Hamill, then, as he moves to the head
of the alley, Miller passes Upham.
UPHAM
Sir, I'm sorry about what
happened, I...
MILLER
(interrupting)
It was nothing.
55.
UPHAM
But you could have gotten killed
and I...
MILLER
(interrupting)
Like I said, it was nothing.
(to the men)
Don't bunch up.
He takes off, crouch-running back down the block.
Upham watches him go.
UPHAM
Did you see what he did, back
there?
He stepped right into the open, so I could get across.
JACKSON
Shit, that was no big deal.
WADE
They can't kill him.
SARGE
Like hell they can't.
REIBEN
Wade's right, it's some kind of
scientific, magnetic thing, I
can't explain it, but I've seen it.
WADE
We all have, he's got nine lives,
or he's bulletproof, or some damn
thing.
The men are equal parts joking and admiring. Sarge is
neither.
SARGE
No one's bulletproof. No one.
(beat)
C'mon, stay low.
Sarge takes off after Miller.
56.
EXT. ST. MERE CATHEDRAL - DUSK
Miller and his men are bivouacked in the middle of the ruins
of a medieval church. Miller, settled into a comfortable
spot in the debris, eating his K-rations, looks very relaxed.
Reiben paces.
REIBEN
Captain, could you please explain
the math of this mission to me?
MILLER
Sure, what do you want to know?
REIBEN
Well, sir, in purely arithmetic
terms, since when does six equal
one? What's the sense in risking
six guys to save one?
MILLER
Ours is not to reason why.
REIBEN
Huh?
MILLER
Never mind, don't worry, we'll
pick up this kid, high-tail it
back to division, everything'll
work out fine.
REIBEN
I'd much rather die in Caen than
Ramelle, sir. It's a personal
thing.
MILLER
Reiben, there's a fairly good
chance you're not going to die at
all.
REIBEN
Easy for you to say, sir.
(beat)
Fucking James Ryan, I'd like to
wring his fucking neck.
SARGE
Jesus, Reiben, think of the poor
bastard's mother.
57.
REIBEN
Hey, I got a mother. Jackson, you
got a mother?
JACKSON
Last I knew.
REIBEN
Wade, Sarge, Corporal Insect, all
of us, hell, I'll bet even the
Captain has a mother.
Miller smiles. Reiben eyes him and reconsiders.
REIBEN
(continuing)
Well, maybe not the Captain, but
the rest of us have mothers.
MILLER
You have orders, too.
JACKSON
Sir, I have an opinion on this
matter.
MILLER
I'd love to hear it.
JACKSON
Seems to me, Cap'n, this mission
is a serious misallocation of
valuable military resources.
MILLER
Go on.
JACKSON
Well, sir, by my way a thinkin' I
am a finely made instrument of
warfare. What I mean by that is,
if you was to put me with this
here sniper rifle anywhere up to
and includin' one mile from Adolf
Hitler, with a clear line of
sight, war's over.
Miller nods.
58.
MILLER
Reiben, I want you to listen
closely to Jackson. This is the
way to gripe. Jackson, continue.
JACKSON
Yes, sir. It seems to me, sir,
that the entire resources of the
United States Army oughta be
dedicated to one thing and one
thing only, and that is to put me
and this here weapon on a rooftop,
smack-dab in the middle of Berlin,
Germany. Now I ain't one to
question decisions made up on
high, sir, but it seems to me that
saving one Private, no matter how
grievous the losses of his family,
is a waste of my God-given talent.
MILLER
Wade?
WADE
Hell, I don't mind this mission,
sir, as long as there's something
up at Ramelle for...
REIBEN
(finishing Wade's
sentence)
...for you to blow up, yeah, yeah,
we heard that.
UPHAM
Upham?
UPHAM
(continuing)
Pass.
MILLER
Sarge?
SARGE
I'm just here to keep a bunch of
numb-nuts, including one certain,
frequently suicidal, tempter-offate, from getting themselves
killed.
Reiben eyes Miller.
59.
REIBEN
And what about you, Captain?
Miller looks at Reiben, shocked.
MILLER
Reiben, what's the matter with
you? I don't gripe to you. I'm
a Captain. There's a chain of
command. Griping goes one way,
up, only up, never down. You
gripe to me, I gripe to my
superior officers. Up, get it?
I don't gripe to you, I don't
gripe in front of you. How long
you been in the army?
REIBEN
I'm sorry, sir, I apologize.
(beat)
But if you weren't a Captain, or
if I were a major, what would you
say?
Miller considers his response.
MILLER
In that case, I would say this is
an excellent mission, with an
extremely valuable objective,
worthy of my best efforts.
Reiben rolls his eyes. Miller plays it straight, with no
obvious sarcasm.
MILLER
(continuing)
In addition, as I pointed out
earlier, I have a fondness for
cheese and I hope to have the
opportunity to sample some of the
Ramelle products, when we arrive
there, to see if they live up to
their excellent reputation.
Moreover, I feel heartfelt sorrow
for the mother of Private James
Ryan and I'm more than willing to
lay down my life, and the lives of
my men, especially you, Reiben, to
help relieve her suffering.
The men thoroughly enjoy the performance.
60.
REIBEN
Sir, if you were not a Captain, I
would compliment you, now, for
being an excellent liar.
MILLER
But I am a Captain. If I were not
a Captain, I would thank you for
the compliment and tell you that
the ability to lie comes from
being a top-notch poker player,
which I am, having learned at the
side of my mother who is, by
popular acclaim, the best poker
player in...
The men all learn forward expectantly, believing they're
about to find out Miller's home town. Miller smiles.
MILLER
(continuing)
...my home town, which shall
remain un-named.
The men ease back, disappointed.
MILLER
(continuing)
Any further thoughts on the
subject?
REIBEN
Yes, sir, as a final note, I'd
like to say, fuck our orders, fuck
Ramelle, fuck the cheese capital
of France and while we're at it,
fuck Private James Ryan.
MILLER
I'll make a note of your
suggestions but I'll leave that
last one to you, especially if
he's already dead.
The men wince and laugh. Miller checks his watch and gets
serious.
MILLER
(continuing)
We move out in two hours, try and
get some sleep.
61.
The men know when to can it. Without another word, they all
settle down into the debris, close their eyes and try to
follow Miller's order. Upham looks around at these strange
men, then, a simple, hard glare from Miller makes him follow
suit.
Miller looks at his men, then pulls out his map case and his
flashlight. He turns it on, in the dim glow of the light, he
studies his maps while his men rest.
EXT. ST. MERE CATHEDRAL - NIGHT (LATER)
Dark. ARTILLERY RUMBLES IN THE DISTANCE. Reiben, Jackson,
Wade and Upham sleep. Miller still sits in the glow of his
flashlight, studying his maps. Sarge lies near him, awake,
watching him. Sarge notices some unopened envelopes in
Miller's map case and speaks quietly to him.
SARGE
You ever going to open those
letters?
Miller keeps his eyes on the maps.
MILLER
Maybe.
SARGE
It's not normal, not reading
letters from home.
MILLER
Since when have things been normal?
SARGE
You got me. Afraid of bad news?
MILLER
Nope.
SARGE
Good news?
Miller looks at Sarge. A moment passes between the two of
them, then miller takes refuge in the maps. Sarge looks at
the men.
SARGE
(continuing)
You think they'll be alright?
62.
MILLER
They're fine. As long as they can
gripe, they'll be alright.
SARGE
And what about you?
Miller considers the question, doesn't answer.
MILLER
They guys here aren't going to be
able to hold out until battalion
shows up.
SARGE
Nope.
MILLER
Command isn't going to let them
withdraw and the Germans sure as
hell aren't going to let them
surrender.
SARGE
Three for three.
MILLER
If we stayed, we could make a
difference.
SARGE
You're kidding yourself.
MILLER
You never know.
They sit in silence for a moment.
SARGE
I hope this boy Ryan is worth it.
MILLER
Now you're the one kidding
yourself.
(beat)
Hell of a mission.
SARGE
Yup, hell of a mission.
Miller looks at his watch, rises and barks at the men.
63.
MILLER
Rise and shine, boys. Let's go.
Grumbling, the men get up and start shouldering up their gear.
EXT. ST. MERE STREET - NIGHT
SMALL ARMS FIRE ECHOES through the village. DISTANT
ARTILLERY BOOMS. Miller leads his men from the ruins of the
cathedral toward the outskirts of town. They're just a small
squad, but these six, heavily-armed men, in full battle gear,
are very formidable-looking.
EXT. ST. MERE - OUTSKIRTS - NIGHT
Miller's men are getting ready to move out. Captain Hamill
and a few of his men are there to see them off. Suddenly:
A FLASH OF LIGHT APPEARS ON THE HORIZON
Then REPEATED FLASHES OF LIGHT. The sky is on fire. The AIR
TREMBLES. A FAR OFF RUMBLING THUNDER ROLLS over the
countryside like a tidal wave.
Then, THE OPPOSITE HORIZON LIGHTS UP AS WELL. IT'S A MASSIVE
ARTILLERY BATTLE. The MAGNITUDE OF THE FURY is incredible,
strange, other-worldly.
EVERY MAN THERE IS TRANSFIXED.
Frozen in place. The lights play on their faces.
MILLER looks down and sees his hand quivering.
SARGE notices, says nothing.
MILLER stares at his hand, forcing it to stop.
Their eyes go back to the BLAZING SKY.
SARGE
(awe-struck)
Makes you feel small, doesn't it?
MILLER
It doesn't take this.
Upham's face shows more fear than awe.
UPHAM
I wasn't made for this.
64.
MILLER
(bitterly)
You think the rest of us were?
Upham recoils. Miller instantly regrets his words. He turns
to Upham and sees that he's really scared. Miller get a hold
of himself and speaks gently.
MILLER
(continuing)
Don't worry, Upham, God'll protect
you, this shit's gonna keep him up
all night, anyway.
Upham manages a slight smile. Miller watches the lights for
a moment more, then he pretends to shrug it off.
MILLER
(continuing)
Let's go, this ain't what they pay
us for.
Captain Hamill is next to snap himself out of it. He points
the way.
CAPTAIN HAMILL
Along the wall, about thirty
yards, there's a gate, on the
other side, a drainage ditch, stay
low until you clear the second
field, then you'll hit the woods.
As Miller and his men shoulder their gear and prepare to move
out, on of Captain Hamill's men, the Gentle-Faced Private who
was so interested in the talk of Private Ryan, steps up with
a couple bandoleers of B.A.R. ammo. He offers them to Reiben.
GENTLE-FACED PRIVATE
Here.
Reiben looks at the bandoleers and is about to give a smartass response, when a look at the Gentle-Faced Private's
vulnerable expression stops the comment dead.
GENTLE-FACED PRIVATE
(continuing)
My older brother was killed at
Guadalcanal...these might come in
handy.
Reiben takes the ammo.
65.
REIBEN
(gently)
Just what I need.
Miller steps over, takes the bandoleers from Reiben and hands
them back to the Gentle-Faced Private.
MILLER
Thanks, but you may need these
more than us, or Ryan.
Captain Hamill nods to the Gentle-Faced Private who takes the
ammo back.
MILLER
(continuing)
Let's move out.
Miller and his men head off along the wall into the darkness,
lit intermittently by the distant flashes. Captain Hamill
and his beleaguered men, watch them go with dread and a
strange bit of hope.
EXT. FRENCH COUNTRY SIDE - NIGHT
The FINAL RUMBLES of the DISTANT ARTILLERY fade away. The
night is dark. The band of six Americans makes their way
warily along a French cart path. Sarge eases up alongside
Miller and speaks quietly to him. The others don't overhear.
SARGE
How long's your hand been shaking?
MILLER
A couple of weeks. It started in
Portsmouth when they brought us
down for loading.
SARGE
Is it getting worse?
MILLER
No. It comes and goes. It stops
when I look at it.
SARGE
You may have to find yourself a
new line of work, this one doesn't
seem to agree with you anymore.
MILLER
I'll be alright.
66.
Sarge looks at Miller, closely, evaluating him, they walk on.
EXT. FRENCH CART PATH - NIGHT (LATER)
Farther along. The men are tired but alert. Jackson is at
point. Miller behind him. The others at intervals. Sarge
brings up the rear.
A SOUND. Jackson stops. No one speaks, they communicate
only with hand signals.
JACKSON SIGNALS to Miller, ten, twenty, thirty men coming.
MILLER SIGNALS for the men to get off the path. They ease
into the brush. An instant later, a PAIR WARY GERMAN
INFANTRY MEN appear.
REIBEN grips his B.A.R. and looks to Miller for permission to
open up. Miller shakes his head and signals, "let them go."
A moment later AN ENTIRE PLATOON OF GERMANS rounds the bend.
Fifty men. Heavily armed. REIBEN breathes a sigh of relief
and lowers his B.A.R.
THE GERMAN PLATOON passes, their boots no more than two feet
from the faces of the hidden Americans. Upham is wide-eyed
with fear. The others are stone-faced.
THE GERMANS PASS.
MILLER MOTIONS for his men to hold their positions.
UPHAM doesn't see the signal. He stands, breathing a sigh of
relief, just as a GERMAN WHIP-TAIL SQUAD appears, trailing
the platoon by thirty meters, protecting their rear.
UPHAM FREEZES. He's standing, barely in the shadows, nearly
exposed. Shitting bricks.
Pissed, MILLER prepares to fire. The Whip-tail squad
approaches.
Then, the GERMANS PASS, miraculously, not seeing Upham in the
shadows. They walk on and disappear. Upham is weak-kneed,
amazed that he's still alive.
MILLER shoots a devastating glare at him, then signals the
rest of the men to follow him into the woods. Upham scurries
after Miller, staying close on his heels.
67.
EXT. FIELD - NIGHT
The little band of Americans walks along the edge of a field,
parallel to a cart path. Wary.
Miller notices Jackson and Wade drifting too close to each
other. He SNAPS HIS FINGERS, getting their attention, and
motions curtly for them to open it up a bit. They do so.
EXT. CROSSROADS - NIGHT
Dark. FAINT DISTANT ARTILLERY. Miller checks the map as
Sarge shines a red flashlight on an array of directional
signs. One of them reads: "Ramelle 16 Km."
Miller puts away the map. Checks the horizon. The first
glow of dawn is visible.
MILLER
It'll be light, soon. Let's pick
it up.
EXT. FRENCH COUNTRYSIDE - DAWN
First light. The SOUND OF DISTANT GUNS has been replaced by
the CHIRPING OF BIRDS. The Americans are taking five.
Miller stands, a bit apart from the others, looking out at
the view. It's lovely. Dew shimmers on the long grass. The
war is far away.
Upham walks next to him. They look out at the view together
without speaking for a moment.
MILLER
It looks like a Renoir.
UPHAM
Yes. Do you know Sibelius' Fourth
Symphony, The Normandy?
MILLER
I've been humming it.
UPHAM
I heard.
MILLER
It seemed appropriate.
UPHAM
You know classical music?
68.
MILLER
Some.
UPHAM
Where are you from, Captain?
Miller smiles.
MILLER
What's the pool up to?
Upham smiles, caught.
UPHAM
Over three-hundred.
MILLER
I'll tell you what, if I'm still
alive when it hits five-hundred,
I'll let you know and we'll split
the money.
UPHAM
If that's the way you feel, why
don't we wait until it's up to a
thousand.
MILLER
I don't expect to live that long.
Upham looks closely at Miller and sees that he means it.
UPHAM
Five hundred, then.
Miller takes a last look at the view and allows himself to
feel an overwhelming wave of sadness. Then he turns himself
back into a commander and barks at Upham.
MILLER
Let's go, Private.
Miller strides away. Upham watches him, trying to figure him
out, then he simply follows him.
EXT. HEDGEROW LANE - DAWN
The seven Americans walk along a hedgerow lane, untouched by
war. Spreading trees arch gently over the lane which is lined
with hedgerows, thick, rooted masses, impenetrable, hundred
of years old.
69.
Miller sees SMOKE AHEAD. He motions to the men. They
advance.
EXT. FRENCH FARM - DAY
A burning house and barn. An old FRENCH FARMER kneels on the
ground, weeping, next to this SLAUGHTERED FAMILY, two adult
women, an adult male and a boy, no more than ten. His
animals, a pair of cows and a draft horse and some pigs are
dead as well, shot to pieces. A DEAD AMERICAN PARATROOPER
lies sprawled in the dirt with empty shell casings around his
body.
Miller and his men approach carefully. Miller motions to
Upham who squats down next to the French Farmer and speaks
gently to him in French.
The FARMER SPEAKS SOFTLY as if in a trance. Upham stands and
translates.
UPHAM
Five nights ago, he found this
paratrooper caught in a tree with
a broken leg. The leg got
infected. Last night he went to
Ville Cholet to get a doctor. The
doctor refused to come and when he
got back, this is what he found.
The Krauts must have shown up
while he was gone.
MILLER
Did he see any sign of them?
Upham gently asks. The FARMER ANSWERS.
UPHAM
No, but he heard firing, just
east, less that a kilometer.
MILLER
Thank him and tell him we're sorry
about his loss.
Miller heads off without glancing back. The men hesitate.
Sarge jerks his head for them to move out. They do so.
Upham squats down and speaks softly to the Farmer, puts his
hand on the man's shoulder, then rises and follows the others.
70.
EXT. HEDGEROW FIELD - DAY
A beautiful, hedgerow-lined field of tall grass. The last of
the dew and morning mist is just burning off.
The six Americans walk carefully through the woods to the
edge of the field.
Miller notices something. He silently signals stop, crouches
and scans the field and the hedgerow on the far side.
Sarge and Jackson ease up next to him. Jackson points to
some trees nearby, freshly shattered and pock-marked with
bullets.
Wade calls quietly from a tangle of roots and brush.
WADE
Captain.
Staying low, they join Wade who has found:
TWO DEAD AMERICAN PARATROOPERS
A trail of blood and flattened grass leads from the field.
MILLER, SARGE AND JACKSON
Crawl to the edge of the field, scan the far hedgerow. The
others crawl up behind them.
MILLER
Where?
JACKSON
In the shadow by those two trees.
MILLER
My guess, too.
UPHAM
What is it?
MILLER
A machine gun.
Miller eases back from the edge of the field into the cover
of the brush. He stands and takes off his pack.
REIBEN
Sir, I've got an idea, let's go
around.
71.
MILLER
We can't leave it here.
JACKSON
We left them eighty-eights.
MILLER
They don't send planes to put out
machine guns.
(beat)
Two flank runners with surpressing
fire. I'm going right, whoever
goes left has to be fast.
Upham steels himself and steps forward.
UPHAM
Sir, I ran the 220 in high school.
REIBEN
He's fast, Captain, I saw him.
Miller takes Upham's measure. Wade laughs with a sneer.
WADE
How fast?
UPHAM
Twenty-four-five.
WADE
Shit, that's nothing, I ran twentytwo flat.
MILLER
Wade goes left.
Wade joins Miller in peeling off his extra gear. Upham is
impressed.
UPHAM
Twenty-two flat?
Wade takes a grenade from Upham's chest strap.
WADE
I would have won the states if
some bastard hadn't tripped me in
the finals.
Miller points the others to their firing positions.
72.
MILLER
Sarge, Upham, here. Jackson,
Reiben, ten yards, either side.
As they take their positions, Miller and Sarge speak quietly,
out of earshot of the men.
SARGE
Rule of thumb, Captain, says you
ought to detail this one, instead
of going yourself.
Miller looks at the two dead paratroopers.
MILLER
Yeah? What rule of thumb is that?
SARGE
How about I go right, sir?
MILLER
How about you take your position?
Sarge hesitates.
SARGE
How about...?
MILLER
(interrupting)
How about you shut up and take
your position?
Sarge nods.
SARGE
Yes, sir.
Sarge finds a spot. Miller joins Wade. Miller waits near
Upham as the other men settle into their firing positions.
UPHAM
Good luck, Captain.
MILLER
Don't need it, I'm a cat, I've got
five lives.
UPHAM
The men said, nine.
73.
MILLER
What do they know?
(beat)
I had nine, but I feel through the
ice when I was seven, my brother
pulled me out. Then I used one
when a grenade landed in my
foxhole in Sicily, it was a dud.
I figure one on the beaches, one
on the cliffs and two getting here.
UPHAM
That only leaves three.
MILLER
Plenty.
Miller sees that the men are in position. He nods to Wade.
MILLER
(continuing)
Ready?
WADE
Yes, sir.
Miller and Wade take deep breaths.
MILLER
Now.
MILLER AND WADE TAKE OFF AT FULL RUNS.
Onto opposite sides of the field. Nothing happens for a
moment. Then:
A HEAVY GERMAN MACHINE GUN OPENS UP. MURDEROUSLY LOUD.
SHATTERING THE QUIET.
IN THE NEST
A squad of Germans, dug deep, BLASTING THE MACHINE GUN, a BIG
SCHWARZLOSE 8MM, a stunningly powerful weapon. Four Germans
in the nest, four more outlying riflemen.
MILLER
Takes the FIRST FIRE. He HITS THE DIRT. The BULLETS SCREAM
just over him.
THE MACHINE GUN SWINGS TOWARD WADE
74.
MILLER JUMPS UP AND SPRINTS
WADE HITS THE DIRT
The BULLETS GRAZE the back of his helmet.
SARGE, REIBEN, JACKSON, UPHAM
Zero the machine gun. FIRE fast as they can. Their BULLETS
THUD INEFFECTUALLY into the hedgerow.
THE MACHINE GUN SWINGS BACK TOWARD MILLER
WADE JUMPS UP AND SPRINTS
MILLER HITS THE DIRT
Bullets SMASH into the ground all around Miller.
SARGE
FIRES A LONG BURST from his Thompson. No effect. Pissed.
POPS THE CLIP. SLAMS in another. FIRES.
THE MACHINE GUN SWINGS FROM MILLER
He rises and runs. Fast. Almost to the far hedgerow.
WADE
Ten more yards. Too slow. A deadly row of BULLETS KICK UP
DIRT toward him.
MILLER
Makes it to the far side. Scrambles up the roots. Dives
through the brush.
WADE
On a slight rise. Can't hit the dirt. A line of bullets.
Desperately sprints.
WADE IS HIT. HEAVY BULLETS RIP APART HIS BELLY. He spins.
Goes down.
SARGE, UPHAM AND THE OTHERS are horrified. FIRE at the nest.
MILLER
STRUGGLES through the hedgerow. Stumbles onto the path.
Rolls to his feet, running.
75.
Swings his Thompson into firing position. Racing toward the
nest.
SARGE AND THE OTHERS POUR FIRE at the nest.
MILLER
Tearing along the path. Sees a German rifleman. FIRES A
BURST. CUTS HIM DOWN. Runs over the body without breaking
stride.
SARGE STEPS INTO THE OPEN, INTENTIONALLY DRAWING THE GERMAN
FIRE from Miller.
The GERMANS ZERO SARGE. BULLETS THUD all around him.
Somehow he's not hit.
MILLER
TEARS THROUGH THE TREES. BLASTS his Thompson. CUTS DOWN two
more German riflemen. Grabs a grenade. Pulls the pin.
THE NEST
The Germans see Miller coming. Wheel from Sarge. Too late.
MILLER
THROWS the grenade, VEERS and DIVES.
THE GRENADE EXPLODES.
The four Germans in the nest are KILLED. SARGE hollers to the
others.
SARGE
HOLD YOUR FIRE!
MILLER
rolls to his feet. FIRE another BURST. KILLS the last of
the German riflemen. Doesn't pause. RUNS onto the field.
SARGE AND THE OTHERS
See Miller running toward Wade. They instantly RACE onto the
field.
WADE
Lies in the grass. Holding his belly. Astonished by the
pain.
76.
ALL THE AMERICANS RUN
Converging on Wade. Miller points, and yells, without
slowing down.
MILLER
REIBEN, UPHAM, PERIMETER! COVER!
REIBEN AND UPHAM
Stop instantly. Turn toward the perimeter of the field.
SARGE
Roots through his medical kit as he runs. Dropping and
scattering inessentials behind him.
WADE
Wide-eyed. Not even writhing. Too much pain.
MILLER AND SARGE GET TO WADE
Throw themselves onto the ground next to him. They both tear
out sulfa-packs. Sarge frantically fumbles. Ripping one
open. Powder spills.
REIBEN AND UPHAM repeatedly glance back at Wade.
SARGE
Pulls Wade's hands from the wound. Pours sulfa powder.
MILLER
About to pour his sulfa. Sees the wound. Stops. Knows it's
fatal.
MILLER
Damn it!
Throws the sulfa aside. Quickly pulls out a morphine pack.
SARGE
Fumbles with a second sulfa bag.
SARGE
Sulfa, more sulfa...
77.
WADE
Frozen in agony. Looks at Miller. Sees him preparing the
morphine shot. They both know.
WADE
Yeah...morphine...make it a
double...huh...Captain...?
MILLER
SHOVES THE NEEDLE into Wade's neck. Thick vein. Pumps the
morphine straight to Wade's brain. Motions impatiently to
Sarge.
MILLER
More morphine, hurry up, come on,
come on...
SARGE
Hesitates. Then drops his sulfa. Fumbles in his pack.
Finds the morphine.
MILLER
Snatches the morphine from Sarge. Quickly and efficiently
prepares a second shot. He's done this before.
REIBEN
On guard, glancing back. Pissed off.
REIBEN
Goddamn it...Goddamn it...Goddamn
it...
UPHAM
Freaked out. Trying to keep his eyes on the perimeter.
Can't.
JACKSON
Watching.
MILLER
Gives Wade the second shot.
78.
WADE
Feels the effects of the first shot. He sees Upham and
manages a pained smile.
WADE LOCKS EYES WITH MILLER. Looking at him without blame,
without forgiveness. Drifts with the morphine. Then:
WADE DIES
ALL ARE FROZEN IN PLACE
UPHAM begins to weep.
REIBEN furiously mutters:
REIBEN
Goddamn it...Goddamn it...Goddamn
it...
MILLER
Is silent. Motionless. He gently closes Wade's eyes. His
hand quivers slightly as he unclips one of Wades dogtags. He
fumbles and drops it. Sarge notices.
Miller stares at his hand and steadies it before the men see.
He picks up the dogtag and pockets it.
Then Miller carefully re-packs the un-used morphine and
sulfa, rises and picks up his Thompson.
Upham shakes his head.
UPHAM
That was no twenty-two flat.
Miller SLAMS A FRESH CLIP into his Thompson.
MILLER
He lied. Let's move out.
Miller turns and walks away without looking back. The men
hesitate, then slowly follow him.
EXT. FRENCH COUNTRY COW PATH - DAY
A narrow footpath, arched over by trees, almost a tunnel.
The five G.I.'s walk, spread out.
79.
REIBEN
Fuck Private James Ryan, fuck him,
just fuck the goddamned son-of-abitch.
JACKSON
Shut up, will you?
REIBEN
You shut up, this is the most
fucked up mission I ever heard of.
Goddamned Ryan, fuck the little
bastard.
JACKSON
Just shut up, Ryan didn't kill
Wade.
REIBEN
The hell he didn't.
Miller motions to them curtly.
MILLER
Keep it down.
They shut up. Miller falls in step to Sarge. Speaks
quietly, the men don't hear.
MILLER
(continuing)
We've got to find someplace to
hole up for a bit.
Sarge looks at Miller closely.
SARGE
You alright?
MILLER
Let's just find someplace.
EXT. NARROW GULLY - DAY
Miller leads the men into a heavily overgrown gully. A good
hiding place.
MILLER
Rest. One hour. Jackson, Reiben,
perimeter. Keep your eyes open.
I'm going to re-con.
80.
Miller speaks authoritatively and says the right things, but
there's something missing. It's subtle. Only Sarge notices.
He watches Miller head off into the brush alone.
EXT. SMALL CLEARING - DAY
Miller walks into a small clearing, slows then stops. The
life drains from him. He stands there, looking at the dirt,
tilting his head, this way and that, as if listening for
faint, distant voices. His face shows a battle raging
within, as he fights to keep from losing it entirely.
Behind him, Sarge steps to the edge of the clearing and
watches. Miller senses his presence, turns and looks at him
if he were a thousand miles away. Sarge sits down on a log
and waits.
MILLER
What was the name of that kid at
Anzio, the one who got his face
burned off?
SARGE
Vecchio.
MILLER
Yeah, Vecchio, I couldn't remember
his name, he was a good kid,
remember how he used to walk on
his hands and sing that song about
the man on flying trapeze?
SARGE
Yeah.
MILLER
You know why I'm such a good
officer? Because of my mother.
Have I ever told you about her?
SARGE
Bits and pieces.
MILLER
She's the best poker player you
ever saw. My father used to go to
these Saturday night games and
lose his shirt.
(more)
81.
MILLER (cont'd)
Finally, my mother gave him an
ultimatum, either she gets a
regular seat at the table or she
locks him in every Saturday night.
He squawked and so did his buddies
but after a while they gave in and
from the first night she sat down,
she never lost. She could read
those cocky bastards like they
were playing open hands. And he
bluffs? He had sixteen levels of
bullshit. Her eyes, the tone of
her voice, her bets, her jokes,
the way she sipped her coffee, she
was a master. She won more money
on shit hands than anyone in the
history of the game. Every
Saturday night, my father would
lose two, three hundred bucks and
she'd win it all back and then
some. And I'd stand there, glued
to her shoulder, from the time I
was five years old, watching every
hand, every move, studying how she
did it.
(beat)
That's why I'm such a good
officer, I can look at a man's
face and tell you exactly what
he's holding, and if it's a shit
hand, I know just what cards to
deal him.
SARGE
And what about your own hand?
MILLER
No problem. A pair of deuces?
Less? So what? I bluff. It used
to tear me apart when I'd get one
of my men killed, but what was I
supposed to do? Break down in
front of the ones who were
standing there waiting for me to
tell them what to do? Of course
not, so I bluffed, and after a
while, I started to fall for my
own bluff. It was great, it made
everything so much easier.
82.
SARGE
Is that why your hand's been
shaking?
MILLER
It could be worse. You know the
first thing they teach you at
O.C.S.? Lie to your men.
SARGE
Oh, yeah?
MILLER
Not in so many words, but they
tell you you can have all the
firepower in the world and if your
men don't have good morale, it's
not worth a damn. So if you're
scared or empty or half-a-step
from a Section Eight, do you tell
your men? Of course not. You
bluff, you lie.
SARGE
And how do you bluff yourself?
MILLER
Simple, numbers. Every time you
kill one of your men, you tell
yourself you just saved the lives
of two, three, ten, a hundred
others. We lost, what, thirty-one
on the cliffs? I'll bet we saved
ten times that number by putting
out those guns. That's over three
hundred men. Maybe five hundred.
A thousand. Then thousand. Any
number you want. See? It's
simple. It lets you always choose
mission over men.
SARGE
Except this time, the mission IS
a man.
MILLER
That's the rub. I liked Wade.
Who's Ryan? If they're both
standing in front of me and I have
to shoot one or the other, how do
I choose? Look at my hand, there
it goes again.
83.
SARGE
John, I've got to tell you, I
think you're about used up.
MILLER
I think you're right, Keith.
SARGE
You want me to take over?
The question helps Miller pull himself back together. He
looks at his hand and forces it to stop shaking again.
MILLER
No, but if I get any worse, you'll
have to relieve me.
SARGE
(sighs)
Just what I want to do.
They share a smile.
MILLER
You know Wade was the eleventh of
the twelve, you're the last one
still alive.
SARGE
I know.
MILLER
Don't let yourself get killed, if
you do, they might make me give
back the medal and then I won't be
able to lip off to colonels
anymore.
SARGE
I'll do my best.
They shake their heads at the madness of it all.
MILLER
Hell of a...
(beat)
Ah, forget it.
Miller picks up his Thompson and looks around, re-orienting
himself. He's about ninety-five percent there.
84.
MILLER
(continuing)
Thanks for drawing that machine
gun off me.
SARGE
You're welcome, John.
MILLER
But, that's my personal brand of
stupidity, I feel kind of
proprietary about it, if you do it
again, you're busted.
Sarge allows himself a slight smile.
SARGE
Yes, sir.
Miller jerks his head for Sarge to follow. They head back to
the men.
EXT. CLEARING - DAY
The men are all in their private worlds, thinking of Wade.
No talk. Miller and Sarge walk back into the clearing.
Miller barks at the men.
MILLER
Up. We're moving out.
REIBEN
I thought you said we had an hour,
sir?
MILLER
Well now I'm saying we're moving
out. Get off your ass.
The men get up. Jackson is a bit slow.
MILLER
(continuing)
What the hell's the matter with
you, Jackson?
JACKSON
Sir, I ain't feeling so chipper on
account of Wade.
MILLER
Who's Wade?
85.
No one responds.
MILLER
(continuing)
I said, who the hell is Wade?
The men exchange looks. Jackson speaks for them.
JACKSON
Sir, I understand what you're
doin', but I respectfully request
permission to grieve in my own
manner.
MILLER
You'll grieve the way I tell you
to goddamned grieve. There is no
Wade, there was one, but he died
a long time ago, he's been dead
for so long you can hardly
remember his name, you understand?
JACKSON
Sir, I understand. I don't like
it, but I understand.
MILLER
Good, now get your goddamned gear.
The men pick up their equipment and prepare to move out.
Sarge and Miller exchange a silent look. Miller shakes his
head to himself, amazed that the men still allow this shit to
work. He knows they have no choice.
EXT. FRENCH ROAD - DAY
Miller and his men walk along the road. The men are silent,
grim.
EXT. FRENCH PATH - DAY
Miller checks his map. figures out where they are. Folds up
the map, points the way and they move out.
EXT. FRENCH FIELD - DAY
More progress. The men are still grim.
REIBEN
You know what the best possible
thing that could happen is?
86.
JACKSON
Yep, you step on a rusty nail, get
lockjaw, never say another word as
long as you live.
Miller laughs.
MILLER
I'll bite, Reiben.
REIBEN
I've given this a lot of thought,
sir. The best thing that could
happen is, we find Ryan and he's
dead.
MILLER
Why's that?
REIBEN
Well, sir, consider the
possibilities. A: Ryan is alive.
We have to take him back to the
beach. Knowing you, you don't let
him carry my gear, even though he
really should, and we all get
killed, trying to keep him alive.
MILLER
Except for the last part, that
one's not bad.
REIBEN
B: Ryan is dead. He's been blown
up by the German equivalent of
Wade, whose name I know you don't
want me to mention. There's
nothing to find. The biggest
piece is the size of a pea. We
wander around, looking for him
until the Germans pick us off, one
after another.
MILLER
I don't like that one.
REIBEN
Neither do I, sir. C: And this
is the worst one, we find Ryan and
he's wounded. Not only does he
not carry my gear, we have to
carry his gear. And him.
87.
MILLER
But we accomplish the mission.
REIBEN
Maybe. But what if he dies on the
way back? you see what I'm
saying, sir? The best possible
situation is, he's dead, we find
his body, more or less intact, we
grab one of his dog-tags and hightail it back to the beach, or
better yet, we head over to Caen
and catch up with division.
MILLER
Has anyone ever told you, you're
officer material?
REIBEN
No, sir.
MILLER
That's a mystery to me.
No one smiles, but they trudge a bit less.
EXT. CROSSROADS - DAY
The SOUND OF HEAVY FIRING. Miller checks a map in the brush
near the crossroads. A sign reads: "Ramelle 3 Km." Miller
folds up the map.
SARGE
Looks like we're going to beat
those Kraut companies to Ramelle.
Suddenly Miller stops dead. He listens, hearing something
the others don't hear. He motions for them to freeze, they
do. The SOUND grows louder. It's an OMINOUS RUMBLE.
MILLER
I don't think so.
EXT. FRENCH ROAD - DAY
THE RUMBLE turns into the ROAR OF A BIG GERMAN CONVOY. Troop
trucks, armored personnel carriers, a regiment of crack
Wehrmacht troops. Heavily armed. Imposing. Crossing a
bridge.
88.
CAMERA PANS DOWN TO REVEAL
Miller and his men crowded into a culvert under the bridge.
Brush and debris partially shield the ends of the culvert.
GERMAN FLANK SQUADS
Hurry along the fields on either side of the road, trying to
keep up with the vehicles.
MILLER AND HIS MEN
Catch a glimpse of an approaching German Flank Squad. They
flatten themselves into the mucky water. Ready their
weapons. Prepare to fire.
THE GERMAN SQUAD
Approaches the bridge.
A PAIR OF GERMAN PRIVATES
See the culvert obscured by brush. Move to check it out.
MILLER
Is just about to open up on them.
THE GERMAN SERGEANT
Sees his Flank Squad lagging behind and CALLS to them.
THE GERMAN PRIVATES
Obey. Hurry after the rest of the convoy.
IN THE CULVERT
The Americans breathe again.
UPHAM
I wonder where they're going.
MILLER
Same place we are.
Jackson, at the mouth of the culvert, motions that the coast
is clear. They head out.
89.
EXT. OUTSKIRTS OF RAMELLE - DAY
A gently-sloped valley with scattered farm cottages and
small, cultivated fields, bordered by ancient, moss-covered
stone walls. The twos is visible beyond.
Miller and his men crouch-run to the cover of one of the
stone walls. Miller pulls out his binoculars.
ON THE FAR SIDE OF THE FIELD
There's a large gathering of German troops and vehicles.
MILLER
Scans the Germans with his binoculars.
REIBEN
Looks like tea time, maybe they're
Brits.
UPHAM
I sure hope so.
SARGE
What do you think they're waiting
for, Captain?
Just then they hear an OMINOUS RUMBLE, deeper and more
threatening that that of the convoy. The sound gets LOUDER
and LOUDER. Miller and his men exchange looks. They know
that sound, they don't like it.
FOUR MASSIVE GERMAN TANKS
Appear down the road, heading for the German soldiers who
greet them enthusiastically. The tanks are tigers, huge, far
bigger than an American Sherman. Each one, sixty-two tons,
with a big 88-mm gun, four heavy machine guns and impregnable
armor. Each one, an infantryman's nightmare. There are four
of them.
MILLER
Puts away the binoculars and jerks his head for his men to
follow, low, along the wall. The men are happy to do so,
looking back nervously at the German tanks.
90.
EXT. TOWN SQUARE - RAMELLE - DAY
The SOUNDS OF SPORADIC SMALL ARMS FIRE. The town square is
a deserted battlefield, littered with burning debris, shell
casings and bodies, German and American and a few French
civilians.
Miller and his men enter the square, weapons ready, leapfrogging from doorway to doorway.
Miller and Sarge crouch-run to the cover of some overhanging
debris. They listen, trying to pinpoint the exact source of
the firing.
Sarge motions his guess. Miller nods in agreement. He
signals for the men to follow him around, not toward, the
firing.
They move on, dashing from cover to cover.
EXT. BRIDGE - RAMELLE - DAY
A dozen AMERICAN PARATROOPERS on the bridge exchange SPORADIC
FIRE with a few German snipers hidden in the buildings near
the bridgehead. The bridge has clearly been the scene of
heavy fighting. Craters, burning debris and shell casings
are everywhere. The bridge is intact, only slightly damaged.
There are dozens of German bodies along the riverbank on both
sides of the bridge.
MILLER AND HIS MEN
Crouch-run and take cover as they get within sight of the
bridge.
REIBEN
Looks like they've been having a
hell of a party, here, Captain.
MILLER
ON THE BRIDGE! WE'RE COMING IN.
A YOUNG BUT GRIZZLED VOICE calls back.
VOICE FROM BRIDGE
KISS MY ASS, FRITZ.
MILLER
YOU FIRE AT US AND I'LL DO A HELL
OF A LOT MORE THAN THAT.
91.
VOICE FROM BRIDGE
WHO WON THE '38 ARMY-NAVY GAME?
Miller turns to his men. They all come up empty.
MILLER
I HAVE NO FUCKING IDEA. HERE WE
COME.
(to his men)
Cover me.
REIBEN
What if our guys open up, sir?
MILLER
You're only allowed to shoot at
Germans, that's one of the rules.
REIBEN
Have it your way, Captain.
Miller takes a breath, then DASHES out into the open, toward
the bridge.
THE GERMAN SNIPERS OPEN UP
Bullets SMASH INTO THE GROUND around Miller.
MILLER'S MEN
POUR FIRE at the German positions, SURPRESSING THE GERMAN
FIRE.
ON THE BRIDGE
The Paratroopers pour a HEAVY STREAM OF BULLETS at the German
positions.
Miller makes it to the bridge and DIVES over a defensive
jumble of crates, sandbags and bodies.
He finds himself next to SERGEANT BILL FORREST who was the
young but grizzled voice that called out. With Forrest are
some very worn-out, young AMERICAN PARATROOPERS. Miller
catches his breath.
FORREST
Navy, sir, twenty-one to nineteen.
They won on a field goal in
overtime.
92.
MILLER
I'll keep it in mind.
(calls to Sarge)
OKAY, SARGE, ONE AT A TIME.
Miller and the paratroopers FIRE COVER for Miller's men as
they come in. Miller and Forrest alternately take and FIRE.
FORREST
Are we glad to see you, sir, we
were supposed to hold this bridge
for twenty-four hours, it's been
six days.
MILLER
Things are tough all over. We're
looking for a Private James Ryan.
FORREST
Ryan?
MILLER
Is he here?
Forrest motions to one of the paratroopers.
FORREST
Go get Ryan.
(to Miller)
What do you want him for, sir?
Miller doesn't answer. Jackson leaps over the barricade and
scrambles to them.
MILLER
Jackson, get a hold of command.
Jackson cranks up the five-thirty-five. Miller turns to
Forrest.
MILLER
(continuing)
How many men do you have?
They pause to FIRE, covering Sarge, the last of Miller's men
to leap over the barricade.
FORREST
Eleven, sir. We started with
thirty-six.
(more)
93.
FORREST (cont'd)
The bridge was easy to take but
the Krauts have been coming back
at us ever since. They must want
it intact or we'd be long gone.
Jackson speaks into the radio handset, repeating Miller's
hailing I.D. No response.
JACKSON
Not yet.
MILLER
Keep trying.
FORREST
Sir, what do you want with Ryan?
Miller doesn't answer, he looks past Forrest and sees:
PRIVATE JAMES RYAN
Dashing from cover to cover, making his way toward them.
Ryan is an American classic, nineteen years old, earthy,
handsome, sharp, cocky. Though he's exhausted, unshaven, and
smeared with dirt and blood, he's very alive. His eyes
shine, his face has a spark. You can't help but love this
kid.
MILLER'S MEN
All watch Ryan run toward them.
JACKSON
So, that's Ryan.
REIBEN
Looks like a flaming asshole to me.
Their eyes remain glued to Ryan as he makes it to the
barricade. He salutes Miller.
RYAN
I'm Ryan, sir. You wanted to see
me?
Miller looks at Ryan for a moment, amazed that he's finally
face-to-face with him. Ryan waits. Miller hesitates,
searching for words. Then he speaks gently but clearly.
94.
MILLER
Private, I've got some bad news
for you. Your brothers have been
killed in action.
The life instantly drains from Ryan. His breath comes hard.
Somehow he remains upright.
RYAN
All three?
MILLER
Yes.
Ryan sways. Miller grabs him and eases him back, leaning him
against some sandbags.
THE PARATROOPERS
Are stunned at the news. They look at Ryan, there's nothing
else they can do.
MILLER'S MEN
Also look at Ryan, but then, one after another, they turn
away, adverting their eyes, looking a their own boots, the
debris on the bridge, the sky, anything other than Ryan.
MILLER
We've been sent to get you out of
here. You're going home.
Ryan weakly waves Miller off. Miller motions to his men and
the paratroopers to move away. They do so, giving Ryan a
little room.
FORREST
Three brothers, the poor son-of-abitch.
MILLER
Sergeant, we're moving out and I'm
taking you and your men with me.
FORREST
But, sir, our orders are clear,
we're to hold this bridge until
we're relieved by forward elements
of the Twenty-ninth Division.
95.
MILLER
I'm giving you new orders,
Sergeant.
FORREST
Sir, you can't do that, these
orders are from command.
MILLER
I'm not going to leave you and
your men here to get killed. Get
them together, we're moving out.
A VOICE from behind them speaks simply, clearly, firmly.
RYAN (O.S.)
No, sir.
They all turn and see Ryan standing there. Miller is about
to automatically rip Ryan a new asshole for contradicting
him, but he quickly calms himself, gently touches Ryan on the
arm and speaks softly to him.
MILLER
Come on, Private, you're going
home.
Ryan jerks away from Miller.
RYAN
No, sir.
All eyes are on Miller and Ryan. Miller remains patient.
MILLER
Private. I'm sorry about your
brothers but staying here and
getting yourself killed isn't
going to help.
RYAN
Sir, if the Krauts are holding
this bridge when division shows
up, our guys are going to be
sitting ducks.
MILLER
This bridge cannot be held. The
Germans have two companies less
than three miles from here. They
have tanks.
96.
That news clearly affects Ryan and the other paratroopers,
but Ryan holds his ground.
RYAN
Sir, I'm still not going.
Miller speaks with restrained, but growing, anger.
MILLER
Private, if you want to commit
suicide, that's your choice, but
you're going to have to wait until
after I get you back to the beach.
And you're not going to take these
men with you.
Ryan stands eye-to-eye with Miller.
RYAN
I'm not leaving, sir.
Miller starts to boil over.
MILLER
The hell you aren't, you're comin'
with me if I have to drag you
every inch of the way. You hear
me, Private?
RYAN
I hear you sir, but I'm not
leaving.
Miller grabs Ryan by the lapels and shakes him. Ryan doesn't
resist.
MILLER
Listen you little son-of-a-bitch
you're coming with me or
I'll...I'll...
Ryan speaks softly.
RYAN
What are you going to do, sir,
shoot me?
Miller considers it. Then REIBEN SPEAKS UP from behind
Miller.
97.
REIBEN
(politely)
Uh, excuse me, Captain.
Miller slowly turns and glares.
REIBEN
(continuing;
continuing)
So, what are a few tanks, sir?
Miller's more amazed than pissed off. Reiben smiles.
REIBEN
(continuing)
He's right, we can't shoot
him...well, we could but we'd get
in an enormous amount of trouble.
And he's right about the bridge,
it's a hell of a lot more
important than he is.
JACKSON STEPS FORWARD.
JACKSON
Cap'n...?
Miller turns his glare on Jackson.
JACKSON
(continuing)
Seems to me, we got us a
opportunity, here, to kill two
birds with one stone. Command
seems to think keepin' this boy
alive is worth somethin'. If we
was to do that and hold this
bridge, good chance we'd get us a
bucket full of medals. I might
even get me one 'a them big, fancy
ones like you got, so's I could
sass any officer in the whole dang
army, you included.
Miller does a slow burn.
UPHAM STEPS FORWARD
UPHAM
I'd like to stay, too, Captain.
98.
MILLER
You don't count.
SARGE STEPS UP
SARGE
I do and personally, I'd rather
get the hell out of here, but
somebody's got to stay and take
care of you and these pin-head
privates of yours.
Miller looks at FORREST AND THE PARATROOPERS.
FORREST
We weren't planning on going
anywhere, sir.
Reiben smiles.
REIBEN
See, Captain? The vote's
unanimous.
Miller's eyes almost pop out of his head.
MILLER
The vote? What the hell are you
talking about? We don't vote.
This isn't a democracy. This is
the army, I give orders, you
follow them. We don't vote!
REIBEN
Yes, sir, of course, sir, I was
merely speaking hypothetically.
IF this was a voting situation,
then the vote would have been
unanimous. But of course, it's not
a voting situation, you're the
Captain, and you give the orders,
sir.
MILLER
You're goddamned right, I give the
order. Vote! Jesus Christ!
Listen to me, you little pissant
pieces of shit, I am the ranking
officer here and what I say goes,
is that clear?
They all quickly nod.
99.
JACKSON
Yes, sir.
REIBEN
Of course, sir.
ALL THE OTHERS
Yes, sir. Yes, sir.
Miller looks from face to face.
MILLER
In that case...
(beat)
I vote we stay.
That's what they wanted to hear. Miller doesn't give them
time to enjoy it, he immediately starts barking orders.
MILLER
(continuing)
Reiben, the B.A.R., there.
Jackson, get up on the
bridgekeepers hut with your sniper
rifle. Sarge, you and Upham move
that machine gun so it can cover
the left flank, it's worthless
where it is. Forrest, I want a
full inventory of all your
weapons, ammo and ordnance. Go.
They all hurry off, except for Ryan who locks eyes with
Miller for a moment.
RYAN
Thank you, sir.
MILLER
(gruffly gentle)
Yeah, yeah. I want you right next
to me, no matter where I go, you
understand?
Ryan salutes.
RYAN
Yes, sir.
MILLER
Alright, come with me.
100.
Miller shakes his head at himself and strides off to check
the defensive perimeter with Ryan at his side.
EXT. BRIDGE - DAY
Miller and Reiben watch as Forrest, Ryan and a couple other
paratroopers lay out their weapons and ammo inventory.
FORREST
Two machine guns, twenty-two
grenades, two Gammon grenades, six
satchel charges, twenty-six M-1's,
eight Tommy guns and about sixty
rounds per man.
MILLER
That's it?
Reiben looks at the sparse array of weaponry.
REIBEN
Sir, can I change my vote?
Miller sighs, worried.
EXT. BRIDGEKEEPER'S HUT - DAY
Jackson, perched on the bridgekeepers hut, protected by a
crescent of sandbags. His eye is at his scope. He FIRES.
A GERMAN SNIPER
Falls from a window on the edge of town, dead.
UPHAM
Sits beside Jackson with a pair of binoculars, searching for
another target. The German sniper fire has subsided for now.
EXT. BRIDGE - DAY
Miller watches as Ryan and several other paratroopers dig a
series of trenches across the street, leading to the bridge.
Reiben, Jackson and Upham, stone-faced, watch Ryan.
Miller eyes the buildings near the bridge head. He speaks to
Sarge who holds several satchel charges.
MILLER
Sarge, see what you can do to make
those buildings inhospitable.
101.
SARGE
Yes, sir.
Just then they hear the sound of A BIG GUN FIRING IN THE
DISTANCE. They all turn at the sound.
UPHAM
Eighty-eights, right?
Miller nods.
UPHAM
(continuing)
I can tell what the gunners had
for dinner.
MILLER
Those guns are close.
FORREST
Just south of town. The Krauts
have a two gun emplacement, we saw
it on the way in. That's how we
knew they wanted the bridge
intact, they didn't blow the crap
out of us.
MILLER
Let's hope they don't change their
mind.
Upham listens to the eighty-eights with particular interest.
INT. BUILDING - DAY
Within sight of the bridge. Sarge carefully plants a wiretriggered satchel charge at the door of the building. He
sets the wire, then carefully backs away.
EXT. BRIDGE - EVENING
Reiben and Ryan pile sandbags, finishing a forward machine
gun nest. Miller looks around, evaluating, Sarge and Upham at
his side.
SARGE
What do you think?
102.
MILLER
Well, if we had ten times the men
and a lot more ammo, we might
stand a chance, but not against
those tanks.
SARGE
What are we going to do?
MILLER
We're going to hope like hell the
tanks were on their way somewhere
else.
REIBEN
Maybe Caen.
MILLER
Let's hope, because we're sure as
hell not going to do any damage to
them with what we have here.
UPHAM
What about our grenades?
MILLER
Those are Tigers, they have sixinch armor, they don't even notice
grenades.
UPHAM
Would they notice and eighty-eight?
MILLER
Sure, you got one?
UPHAM
The Germans do.
Miller is stone-faced, then he smiles.
MILLER
Upham, go find Jackson, he and I
are going hunting.
Upham runs off. Sarge shakes his head.
SARGE
Uh, oh.
MILLER
Out of the mouth of babes.
103.
EXT. BRIDGEHEAD - NIGHT
Dark. Miller, Jackson and Forrest darken their faces with
blackening soot. The rest of Miller's men and several
paratroopers, including Ryan, look on. Upham is distressed.
UPHAM
It was my idea, sir, you've got to
let me go.
MILLER
Upham, you've got to learn the
difference between whining and
griping. You can't just rely on
natural ability, you've got to
study and practice.
UPHAM
But, sir...
MILLER
There you go again, that's
whining, that's not okay.
UPHAM
Goddamn it, sir...
MILLER
That's better, but you've still
got a long way to go. Talk to
Reiben, he's a natural and works
at it, he'll give you some
pointers.
REIBEN
Leave him to me, Captain, I'll
have him pissing and moaning with
the best of us.
MILLER
See to it.
RYAN steps up to Miller.
RYAN
I'd like to go, sir.
MILLER
No, Private, I want you to stay
here, keep your head down, don't
do anything brave or stupid.
104.
REIBEN
Aren't they the same thing, sir?
Miller smiles.
MILLER
Reiben, I don't know what I'd do
without you. Sarge, keep Ryan
close to you and alive.
SARGE
Yes, sir.
Miller checks Jackson and Forrest.
MILLER
You ready?
FORREST
Yes, sir.
JACKSON
You betcha, sir.
Miller, Forrest and Jackson prepare to move out.
REIBEN
(southern accent)
Y'all come back.
JACKSON
Reiben, are you makin' fun 'a the
way I talk?
REIBEN
(heavy southern
accent)
Hell, no!
Jackson shoots him a glare, then he follows Miller and
Forrest into the darkness. Sarge, Ryan and the other watch
them go.
EXT. GERMAN EIGHTY-EIGHT EMPLACEMENT - NIGHT
A German eighty-eight FIRES, sending its big shell into the
night. It's eight-man crew re-loads.
IN THE DARKNESS
A slight movement. It's Miller. He crawls to the edge of
the emplacement and freezes in the shadows.
105.
A moment later he's joined by Forrest. A moment after that,
Jackson silently crawls up to them.
MILLER
Eyes the emplacement. Looks for a weakness. There is none.
He motions to Forrest and Jackson to wait. The three of them
settle into the darkness.
EXT. MACHINE GUN NEST - BRIDGE - NIGHT
Sarge, Upham and Reiben sit with Ryan in the darkness. Ryan
is lost in thought, far away. One after another, Miller's
men eye him.
SARGE
Private, I'm sorry about your
brothers.
Ryan nods. Then, with some difficulty, he makes the trip
from Iowa back to France. He turns to Sarge.
RYAN
What was the name of the guy who
got killed coming up here?
SARGE
Wade.
RYAN
Wade. Huh, he died coming up here
to keep me alive...I never met
him...he didn't know me from Adam,
strange. What was he like?
SARGE
A good man, kind of cheerful,
Reiben, here, used to call him a
happy idiot.
REIBEN
Like hell, I did.
RYAN
My brothers would be mighty pissed
off at me, if they knew I let some
guy get killed trying to keep me
alive.
106.
SARGE
You didn't let anybody get killed,
you didn't even know we were
coming up here.
RYAN
Sure, I know, but...
(sighs)
Goddamn it all...
The others nod in agreement. They look closely at Ryan.
EXT. GERMAN EIGHTY-EIGHT EMPLACEMENT - NIGHT
Dark. No firing. Two German soldiers on watch.
A SHADOW
It's Miller. Easing through the darkness. Closer to one of
the sentries.
Miller sees Jackson easing up behind another sentry. Miller
nods to Jackson. They move at the same moment. Behind the
sentries. SLIT THEIR THROATS.
BEHIND THE EIGHTY-EIGHT
Forrest removes the wheel-blocks.
A GERMAN SENTRY
Approaches. He sees Forrest. Just as he's about to open up
with his sub-machine gun, Miller grabs him from behind, STABS
him, eases the body silently to the ground.
MILLER AND JACKSON
Join Forrest at the eighty-eight.
Together they attach the eighty-eight's carriage to the
German's truck.
ANOTHER GERMAN SENTRY
Rounds a corner. Sees them. OPENS UP WITH HIS SUB-MACHINE
GUN.
Forrest DIVES, FIRES BACK.
OTHER GERMANS
Race over, FIRING.
107.
JACKSON
Covering them, OPENS UP. Kills the advancing Germans.
MILLER frantically attaches the eighty-eight to the truck.
FORREST CUTS DOWN, several more Germans.
JACKSON TAKES A GRAZING SHOT IN THE SHOULDER.
Spins.
Still FIRING.
Giving Miller cover.
MILLER LEAPS into the cab of the truck.
JACKSON AND FORREST LEAP into the back.
JACKSON FIRES into the approaching Germans.
THE WINDSHIELD
Is shattered by bullets.
Glass flies everywhere, cutting Miller on the face and hands.
FORREST
In the back of the truck. Spraying the Germans with his
Thompson.
MILLER FLOORS IT.
The truck DRIVES through the Germans.
The Germans FIRE at the truck and trailing eighty-eight.
MILLER, JACKSON AND FORREST
Drive into the night. The Germans FIRING after them.
EXT. ROAD LEADING TO THE BRIDGE - NIGHT
Miller, Jackson and Forrest barrel down the road through a
gauntlet of Germans. As they approach the bridge, the other
American's FIRE COVER for them. Miller drives the truck onto
the bridge.
108.
SMASHES INTO THE SANDBAGS
THE OTHER AMERICANS, with Ryan in the lead, leap over the
barricade and drag the captured eighty-eight onto the bridge.
MILLER
RYAN! GET BACK THERE!
Ryan ignores him. They get the eighty-eight safely behind
the barricade. Miller grabs Ryan.
RYAN
Sorry, sir.
Miller fumes. He sees Reiben, Sarge and Upham, shrugging,
clearly not pissed at Ryan.
MILLER
Don't do that again.
RYAN
I won't need to sir, it's already
here, behind the barricade so...
Miller GROWLS.
RYAN
(continuing)
Yes, sir.
Miller glares at Ryan, then strides off.
EXT. FIELD - NIGHT
Miller and Upham carefully dig up a German mine. Very
gingerly they place it on a growing pile of other mines.
EXT. ROAD LEADING TO BRIDGE - NIGHT
Miller and Ryan lay a mine into the dirt. They cover it and
step back carefully.
Then they proceed with the next. Upham is covering their
tracks while Jackson is digging the holes in which they'll
place the rest of the mines.
EXT. BRIDGE - NIGHT
Quiet. Dark. Everything is ready. There's nothing to do
now but wait.
109.
ON THE BRIDGEKEEPERS HUT
Reiben and Jackson sit behind the sandbags. They can see
Ryan sitting in the moonlight about twenty yards away,
manning the rear machine gun nest with Sarge.
REIBEN
What do you think?
JACKSON
I think I'm we got that eightyeight.
REIBEN
I mean, Ryan, what do you think of
him?
Jackson shrugs.
JACKSON
He ain't half-bad, I guess.
REIBEN
I guess.
They're quiet for a moment.
WADE
He ain't Wade.
REIBEN
Nope, he ain't Wade.
Their eyes keep coming back to Ryan.
MILLER
Crouch-runs through the shadows and stops at the
bridgekeepers hut.
MILLER
Reiben...
Miller points, directing Reiben to the forward machine gun
nest.
REIBEN
Yes, sir.
REIBEN jumps down and moves forward.
110.
MILLER runs across the bridge and joins Sarge and Ryan in the
rear machine gun nest.
MILLER
You set?
Sarge nods.
RYAN
Yes, sir.
Miller and Sarge exchange a look. Then Miller slips off to
check the others.
EXT. BRIDGE - DAWN
First light. The Americans are ready for battle. WE SEE
them in their positions:
REIBEN AND UPHAM
Manning the forward machine gun nest.
JACKSON
Behind the sandbags, on top of the bridgekeeper's hut.
FORREST AND THE PARATROOPERS
Behind the second of two barricades set up between the
forward and the rear machine gun nests.
RYAN AND SARGE
Manning rear machine gun.
MILLER
At the bridgehead, waiting.
A SOUND FROM DOWN THE ROAD
All eyes turn.
A SINGLE GERMAN SOLDIER
Dashes across the street. Exposed only for an instant. Then
another. And another.
MILLER
Cocks his Thompson. Settles down behind some sandbags.
111.
MILLER
HERE THEY COME!
A RUSH OF GERMANS ADVANCE, BLASTING AT THE BRIDGE.
THE AMERICANS RETURN FIRE
REIBEN
OPENS UP with the MACHINE GUN.
THE GERMANS
At least fifty of them, advancing on the bridge. Running
from cover to cover. A squad pushing a French truck, using
it as a shield.
JACKSON
Calmly picking off the attacking Germans.
THE GERMAN INFANTRYMEN
Make their way down the streets. Along the riverbank.
Through the houses. There are GERMANS FIRING from all
directions.
REIBEN FIRES IN ARCS.
MILLER
Sees Reiben and Upham being cut off. Grabs the B.A.R.,
stands and fires.
REIBEN AND UPHAM
Running out of ammo. See that there's nothing else they can
do.
REIBEN
Time to go.
Reiben rolls out of the nest, carrying the fifty caliber.
Upham follows, carrying the ammo boxes. They run as fast as
they can.
THE OTHER AMERICANS FIRE COVER
REIBEN takes a glancing slug. Falls. Rolls and gets up.
Bleeding from the side, but not mortal. Upham helps him.
They MAKE IT TO THE SANDBAGS of the first barricade.
112.
DIVE OVER. The Germans are almost on them.
RYAN IS FIRING
With the rear MACHINE GUN. Drops several Germans.
GERMANS EVERYWHERE
They swarm over the first barricade.
MILLER
FIRES A BURST into a German's belly. HITS another with the
stock of his Thompson.
HAND-TO-HAND.
FORREST AND THE OTHER PARATROOPERS
FIRING COVER for Miller, Reiben and Upham, don't see a
flanking Germans squad easing along the riverbanks. Two of
the Germans LOB POTATO MASHERS among the paratroopers.
THE PARATROOPERS see the grenades. Too late.
THE POTATO MASHERS EXPLODE
KILLING FORREST AND THE OTHER PARATROOPERS
RYAN SEES FORREST AND THE OTHERS DIE
No time to react.
HAND-TO-HAND FIGHTING
Half a dozen Germans break through.
Miller KILLS TWO MORE WITH A BURST.
RYAN
Is jumped on by one. Upham FIRES. KILLS the German.
MILLER
Struggling with a pair of Germans.
JACKSON
FIRES. Drops one of the Germans on Miller with a head shot.
Cuts open Miller's face with bits of skull.
113.
RYAN
Leaps onto the final German attacking Miller. That German
raises his rifle on Ryan.
UPHAM AND REIBEN AND JACKSON
All see it. SIMULTANEOUSLY SHOOT the German.
THE STUNNED GERMAN
About to kill Ryan. Torn apart by bullets from three
directions.
UPHAM
I got him.
REIBEN
Like hell you did, I got him.
JACKSON SMILES.
He got him.
MILLER SLAMS in a fresh clip. FIRES an arc. DROPS four
Germans. Sees an oncoming RUSH OF GERMANS. BARKS to Reiben
and Upham:
MILLER
BACK! LET'S GO!
They retreat, firing back as best they can, trying to make it
to the barricade.
SARGE
Sees them in deep trouble. Leaves Ryan firing the rear
machine gun. Grabs the B.A.R. ADVANCES, FIRING COVER.
Exposed.
BULLETS EVERYWHERE
MILLER, REIBEN, UPHAM make it to the barricade. Dive over.
SARGE
Sees they've made it. FIRES A FINAL BURST. Races for cover.
A trail of bullets right behind him.
THE OTHER AMERICANS FIRE for all they're worth. Trying to
cover Sarge. Too many Germans.
114.
SARGE TAKES A SHOT IN THE BACK. FALLS. MILLER AND THE
OTHERS continue to fire, horrified.
SARGE STRUGGLES TO HIS FEET
Cradling the B.A.R. Stumbling toward cover. Slowing.
Bleeding.
THE AMERICANS
Desperately trying to cover him.
THE GERMANS
Open up with a volley.
SARGE
Is almost there.
ALL THE AMERICANS STAND AND FIRE
As best they can. Right past Sarge. It's not enough.
SARGE
Five feet from the sandbags, his back is TORN APART by
Germans fire. He looks down, stunned at his chest. Amazed to
see GAPING HOLES. An instant of surprise, more than fear.
He looks to Miller. Takes two more stumbling steps. Falls
onto the sandbags. Dropping the B.A.R. over the edge. Dies.
THE AMERICANS FIRE MADLY, CONTINUOUSLY
THE GERMANS
Who killed Sarge are killed. The others back off for now.
REIBEN, UPHAM, JACKSON, RYAN fire at the retreating Germans.
MILLER
Grabs Sarge and pulls him over the barricade. Sees that he's
dead.
THE GERMANS RETREAT.
Around the corner.
MILLER
Stunned, lays Sarge down, kneeling next to him.
115.
THE OTHERS
Watch, start to gather.
REIBEN
Goddamn it...Goddamn it...Goddamn
it...
MILLER
Get back to your positions!
They hesitate.
MILLER
(continuing)
Go!
They follow the order. All except Ryan, who doesn't move.
He can't take his eyes off Sarge.
MILLER
Doesn't move. He just stares at Sarge's body.
RYAN
Looks at Miller, sees him growing weak, starting to sway. He
gently tries to move Miller aside.
RYAN
I'll take care of Sarge...
Miller looks up at Ryan, then back at Sarge's body. Miller
grows cold, making the same startling transformation he made
as he kneeled over Wade's body.
MILLER
Sarge? Who's Sarge?
But this time it doesn't work. He can't make it stick. The
hard expression, disappears. He drifts, utterly lost. He's
called his own bluff.
EXT. BRIDGE - NIGHT
Dark. Quiet. The distant guns are silent for once.
Waiting. Reiben, Upham, Jackson, Ryan and Miller have
tightened their perimeter.
Miller is in a trance. The others glance at him nervously.
116.
They eat in silence. K-rations. Some bread. A last supper.
Then, from out of nowhere, Miller speaks:
MILLER
English teacher, Addley,
Pennsylvania.
Slowly, Miller's men turn to him.
UPHAM
What'd you say, Captain?
MILLER
I teach English at Addley High
School in Addley, Pennsylvania.
REIBEN
Well, I'll be goddamned, I knew it.
JACKSON
Like hell, you did.
UPHAM
Captain, what about our deal?
MILLER
I changed my mind.
REIBEN
What deal?
MILLER
I coach the baseball team, too.
JACKSON
No kiddin'?
REIBEN
What deal?
UPHAM
Forget it.
They all sit in silence.
MILLER
You know that cruise ship Wade's
grandfather was on?
They all nod, except Ryan who doesn't know what Miller's
talking about.
117.
MILLER
(continuing)
I wonder if his cabin is still
available?
REIBEN
That's not where I am.
MILLER
No? Where are you?
REIBEN
I'm in a dressing room with Mrs.
Rachel Troubowitz, our super's
wife. She's an easy forty-four,
double E, but I've convinced her
she's a thirty-eight D and I'm
watching her try and squeeze
herself into a side-stay, silkribboned, three-panel girdle with
shelf-lift brassiere.
(smiles)
She's having a devil of a time,
getting into that thing.
They all share Reiben's dream for a moment. Then Jackson
smiles.
JACKSON
Me? I'm walking with my hound,
Lucy, it's about an hour 'fore
sunrise and we're out huntin'
coon. I got me a flask of pure
Kentucky mash whiskey...
REIBEN
Jackson, how many times I got to
tell you, you're from Tennessee.
JACKSON
I am, but I like imported whiskey.
So there I am and I hear the
biggest ole' coon you ever did
hear, 'a rustlin' right there in
front of me. That ole' boy comes
right out of the brush, I got a
clear shot and he knows he's 'bout
to meet his maker.
(more)
118.
JACKSON (cont'd)
I aim, I got my finger tight on
the trigger and then I just smile
and say to that ole' coon, go on,
now, you get out 'a here. Then I
sit down on a hollow log and take
me a right long pull a' that mash
whiskey.
Upham smiles.
UPHAM
I don't know, I kind of like
Wade's idea about the cruise ship.
I've never been to Tahiti.
REIBEN
What about you, Captain?
Miller smiles. He knows exactly where he is.
MILLER
I'm in my backyard, lying in my
hammock, with my arm around my
wife, listening for the sound of
breaking glass.
JACKSON
Say what, Cap'n?
MILLER
You see, I've got the best house
in all of Addley. It's not the
biggest house, but it's got the
best location, right next to the
junior high baseball field. The
garage windows face left field.
The guy who owned the house before
me had these heavy screens put
over them. The first thing I did
when I bought the place was take
off those screens. Two-hundredtwenty-two yards from home plate
to my garage windows. It takes a
hell of a junior high kid to hit
a ball that far. I look at my
garage windows as a motivator and
a way to scout the kids coming up,
the ones who are going to give us
a shot at the state championship.
(more)
119.
MILLER (cont'd)
I lay there in my hammock and
every time I hear the sound of
breaking glass, I know we're one
step closer to winning it all.
JACKSON
Don't that get kind of expensive,
Cap'n?
MILLER
It's worth it.
JACKSON
To each, his own.
They're all silent for a moment. Then Miller turns to Ryan.
MILLER
How about you, James?
Ryan sighs.
RYAN
I'm home, playing basketball with
my brothers, it's evenin' time,
we're trying' to get in a few more
points before it's too dark to see
the ball. That's where I am.
They all nod. Miller tears off a piece of bread and passes
it to Ryan who tears off a bit and passes it on. They all
eat in silence.
EXT. OUTSKIRTS OF RAMELLE - DAWN
First light. Lovely. Dew shimmers. A ground fog drifts.
A SOUND. Louder. And louder. A GERMAN TIGER TANK RUMBLES
toward the village.
EXT. BRIDGE - RAMELLE - DAWN
All are awake. At their positions. Waiting.
MILLER
Hears the FAINT DISTANT RUMBLE OF THE TANK. Barely has time
to react. Sees:
120.
THE GERMANS ADVANCING AGAIN
MILLER
Here they come.
REIBEN
FIRES a burst. Germans drops.
MILLER
FIRES a burst. More Germans drop.
THE GERMANS KEEP COMING
Lots of them. Moving from cover to cover. FIRING.
MILLER
Manning the forward machine gun. Way out front. Sees that
he's going to be cut off. He grabs the hot gun. The barrel
burns into his flesh. He ignores the pain and RUNS BACK
toward the bridge.
HE DIVES over the sandbags. barely makes it. TRAILED BY
BULLETS.
THE GERMANS
Take positions near the bridge. Moving in. FIRING.
Overwhelming. They're everywhere.
THREE GERMANS
Break through the perimeter.
RYAN SHOOTS one. GRAPPLES with the other two.
REIBEN
Sees Ryan. Races over. SHOOTS one German. STABS the other.
RYAN FALLS BACK. Stunned, unhurt.
REIBEN only gives him a quick look. Gets to the MACHINE GUN.
OPENS UP against the Germans who are still coming. FIRES A
LONG BURST. Germans drop.
MILLER
FIRES again. More Germans drop.
121.
THE GERMANS
Take positions in the building near the bridge.
They start working their way to the tops of the nearby
buildings.
Making their way along the riverbanks.
REIBEN AND RYAN
Forward. Reiben FIRING. Ryan feeding the ammo belt.
REIBEN
MORE AMMO!
UPHAM
Hears that. Doesn't hesitate. He grabs a pair of ammo
boxes. RUNS toward Reiben and Ryan.
SEVERAL GERMANS ZERO UPHAM
OPEN UP on him.
BULLETS TRAIL UPHAM. He's outrunning them. Almost there.
UPHAM
TAKES HALF-A-DOZEN SLUGS. Torn apart. Stumbles the final
few steps to the machine gun nest. Falls on the sandbags,
giving Reiben and Ryan the ammo. UPHAM'S DEAD.
RYAN STUNNED.
For just a micro-second. No time. Grabs the ammo. REIBEN
FIRING. Ryan clips the new ammo belt onto the tail of the one
almost out.
REIBEN
Continues FIRING. CUTTING DOWN the advancing Germans.
THE GERMANS START TO FALL BACK
MILLER
Knows what that means. He hears the RUMBLE OF THE TANKS.
MILLER
TIGHTEN IT UP! HERE THEY COME!
122.
RYAN AND REIBEN
Immediately grab the machine gun and ammo and race back to
the rear nest.
Then RYAN AND MILLER converge at the eighty-eight.
THE FIRST TANK APPEARS
Huge. Terrifying. Clanking. Trailed by two German infantry
platoons.
JACKSON
On the bridgekeeper's hut. Picking off German soldiers who
follow the tank.
A GERMAN INFANTRYMAN SPOTS JACKSON. Hollers into the tanks
voice-tube.
THE TANK
Stops. Grinds its gears. Turning it's turret towards the
bridgekeepers hut.
MILLER
JACKSON!
JACKSON
Knows what's coming but he holds his position, continuing to
pick off German soldiers.
THE TANK BLASTS
THE BRIDGEKEEPER'S HUT AND JACKSON
ARE OBLITERATED IN THE EXPLOSION.
MILLER AND RYAN
SEE JACKSON DIE. A bare moment to react. Then, they turn
their attention back to the eighty-eight. Frantically
turning the aiming cranks. Lowering the barrel to point
blank.
TANK AGAINST EIGHTY-EIGHT.
Which can fire first.
123.
MILLER AND RYAN
Win the race.
FIRE THE EIGHTY-EIGHT
BLAST THE LEAD TANK
DESTROY IT IN A SHOWER OF METAL AND FLAMES
MILLER AND RYAN
Quickly reload the eighty-eight. FIRE AGAIN.
DESTROY THE SECOND TANK.
MILLER
Shoves the FINAL SHELL into the breech of the eighty-eight.
Pats Ryan on the back. Grabs a SATCHEL CHARGE.
RUNS down the bridge. Right toward the two advancing tanks.
RYAN
FIRES THE EIGHTY-EIGHT.
DESTROYING THE THIRD TANK.
MILLER
Races through the debris. Trailed by BULLETS.
REIBEN
With the machine gun. Covers Miller. Keeping most of the
German infantry down.
RYAN jumps behind the second machine gun. Opens up. Helping
to cover Miller.
THE LAST GERMAN TANK
Turret spins. Turning toward the fast approaching Miller.
Ready to blow him to bits.
MILLER
Is almost there. He arms the satchel charge.
THE TIGER'S MACHINE GUNS OPENS UP ON HIM.
124.
BLASTS A TRAIL OF BULLETS
MILLER
Throws the satchel charge under the tank. Rolls off the edge
of the bridge. Lands on the embankment below.
THE LAST TIGER TANK EXPLODES
MILLER, RYAN, REIBEN continue FIRING.
Almost out of ammo.
MILLER SCRAMBLING UP THE EMBANKMENT, back onto the bridge,
ears something over the SOUNDS OF FIRING.
MILLER
HOLD IT! HOLD IT!
Ryan and Reiben cease firing. Now they hear it, too.
A RUMBLE, DEEPER AND MORE OMINOUS than any they've heard yet.
MILLER
(continuing)
Goddamn it!
REIBEN
More tanks...
RYAN
Lot's of them.
The fear on their faces turns to resignation. They know that
they are dead men. They settle into their positions, and
prepare to fire and die.
They wait. The RUMBLE GETS LOUDER AND LOUDER.
THEN MILLER'S FACE STARTS TO CHANGE...a hint...of a
smile...then a real smile...
AN AMERICAN SHERMAN TANK APPEARS from over the rise. Then
ANOTHER...AND ANOTHER...AND ANOTHER...
MILLER, REIBEN AND RYAN
Stand there, stunned, watching tank after tank appear, along
with scores of heavily-armed American soldiers.
125.
They keep coming and coming. American tanks, with wave after
wave of U.S. infantrymen, looking for targets. They find a
few among the departing Germans.
THE ADVANCING TROOPS
Run onto the bridge and start to secure the position. A
SERGEANT and a few of HIS MEN look around, curiously eyeing
Miller, Reiben and Ryan, battered and bloody, standing among
the bodies.
A MAJOR strides up.
MAJOR
Report, Captain.
MILLER
Miller, Company B, Second Rangers,
that's Private Richard Reiben and
that's Private James Ryan, Hundredand-First Airborne.
The Sergeant and several other soldiers overhear.
SERGEANT
Ryan?
One of the soldiers speaks quietly to another.
SOLDIER
That's him, that's Ryan.
The Major puts his hand on Ryan's shoulder.
MAJOR
Command is looking for you, son.
You're going home.
Ryan looks up, tired. He nods.
EXT. RAMELLE BRIDGE HEAD - DAY
American tanks and hundreds of fresh troops stream down the
road and over the bridge.
MILLER, RYAN AND REIBEN
Watch. In a small area, cleared of the debris, the bodies of
Jackson, Upham, Sarge, Forrest and the other paratroopers are
laid out, neatly, respectfully, covered.
126.
Miller and Reiben stay protectively close to Ryan, as if they
don't want to risk him being bumped into or run over by any
of the advancing troops or vehicles.
MILLER
Walks to the bodies. He kneels down next to Sarge and looks
at him for a long moment. Then, with a steady hand, he takes
one of Sarge's two dog-tags. Then he does the same to
Jackson and Upham.
REIBEN AND RYAN watch silently.
MILLER
Stands and walks back to Reiben and Ryan. He hands the dogtags to Ryan who grips them tightly and nods in thanks.
Miller takes a last look at the bridge and the bodies, then
he shoulders his gear.
MILLER
Let's move out.
Reiben and Ryan gather up their gear. They walk with Miller
down the road, away from the bridge.
CAMERA CRANES UP
The three dirty, bloodied, tired men walk down the road,
ignored by the fresh troops marching in the opposite
direction.
RYAN
Captain?
MILLER
Yes, Private.
RYAN
Upham and Jackson, what were they
like?
MILLER
Upham? Good kid, smart, he was
writing a book.
RYAN
Yeah?
127.
REIBEN
Yeah, and he was fast, too, ran
the 220 in twenty-four-five.
RYAN
No kidding.
MILLER
Jackson was from West Fork,
Tennessee, he was going to be a
preacher, his father and uncles
have a traveling ministry out of
the back of a stretch Hudson.
RYAN
And Sarge?
MILLER
Sarge?
(beat)
He was the best friend I ever had.
(smiles)
Lemme tell you about Sarge...
They walk on, disappearing in the distance among the hundreds
and hundreds of American soldiers who are marching down the
road and over the bridge.
FADE OUT:
THE END

`)
  .then((e) => console.log(`Código finalizado, ${e} mensagens enviadas`))
  .catch(console.error);
