new Vue({
    el: "#app",
    data: { 
        menu: "start",
        navigation: [
            { menu:"start", title: "Start" },
            { menu:"uebermich", title: "Über mich"},
            { split: true },
            { menu:"aluminium", title: "Aluminium" },
            { menu:"edelstahl", title: "Edelstahl" },
            { menu:"fahrzeugmod", title: "Fahrzeug Modifizierung" },
            { menu:"laserschnitt", title: "Laserschnitt" },
            { menu:"pulverbeschichtung", title: "Pulverbeschichtung" },
            { menu:"restaurationen", title: "Restaurationen" },
            { menu:"unterkonstruktionen", title: "Unterkonstruktionen" },
            { menu:"sonderanfertigungen", title: "Sonderanfertigungen" }
        ],
        slides:[
            { 
                bg: "img/start/sw_start.png", 
                img: "img/logo.png",
                menu: "start",
                imgStyle: "border-bottom: solid 3px yellow;" 
            },
            {
                bg: "img/start/sw_aluminium.png",
                menu: "aluminium",
                title: "Aluminium"
            },
            {
                bg: "img/start/sw_edelstahl.png",
                menu: "edelstahl",
                title: "Edelstahl"
            },
            {
                bg: "img/start/sw_fahrzeugmod.png",
                menu: "fahrzeugmod",
                title: "Fahrzeug Modifizierung"
            },
            {
                bg: "img/start/sw_laserschnitt.png",
                menu: "laserschnitt",
                title: "Laserschnitt"
            },
            {
                bg: "img/start/sw_pulverbeschichtung.png",
                menu: "pulverbeschichtung",
                title: "Pulver<wbr>beschichtung"
            },
            {
                bg: "img/start/sw_restaurationen.png",
                menu: "restaurationen",
                title: "Restaurationen"
            },
            {
                bg: "img/start/sw_unterkonstruktionen.png",
                menu: "unterkonstruktionen",
                title: "Unter<wbr>konstruktionen"
            },
            {
                bg: "img/start/sw_sonderanfertigungen.png",
                menu: "sonderanfertigungen",
                title: "Sonder<wbr>anfertigungen"
            }
        ],
        me: {
            img: {
                src: "img/me/me.jpg",
                thumb: "img/me/me_thumb.jpg",
                title: "Pock Bernhard"
            },
            header: "Pock Bernhard",
            birthday: "22.09.1975",
            jobheader: "Berufsausbildung",
            jobs: [
                { timespan: "1991-1995", title: "Lehrlingsausbildung zum Werkzeugmacher Fa. WFK" },
                { timespan: "1995", title: "Lehrabschlussprüfung" },
                { timespan: "1995-2005", title: "Facharbeiter, Werkzeugmacher, Fa. WFK" },
                { timespan: "2005-2010", title: "Facharbeiter, Werkzeugmacher, Fa. Proform Prototypen" },
                { timespan: "2010-2011", title: "Techniker, Fa. Family Park Neusiedlersee" },
                { timespan: "2011-", title: "Selbstständigkeit" },
                { timespan: "2012-", title: "Ausbildung zum Fachtrainer / ABT-AusbilderInnentraining im BFI " },
                { timespan: "2016", title: "Meisterprüfung Metalltechnik" },
                { timespan: "2016", title: "Prüfungstätikeit WKO Wifi-Eisenstadt im Bereich LAP - Metalltechnik" },
            ],
            contactheader: "Kontakt",
            contact: {
                adress: "Schulgasse 9, 7062 St. Margarethen",
                phone: "0664/1218967",
                email: "mail@metalldesignpock.at"
            }
        },
        projects: [
            {
                id:"aluminium",
                title: "Aluminium",
                sections: [
                    { 
                        id: "lueftungsabdeckung",
                        title: "Lüftungsabdeckung",
                        description: `
                            Minimalistisch und doch effektiv ist die Lüftungsabdeckung die ich für die Winzergenossenschaft in St. Margarethen fertigen durfte.<br/><br/>
                            Gefertigt wurde diese aus Aluminium Lochblech.<br/><br/>
                            Die Form wurde so gewählt das diese nicht unnötig aufträgt und doch die Lüftungsrohre in Ihrer runden Form abdeckt.`,
                        gallery: [
                            { 
                                src: "img/projects/aluminium/lueftungsabdeckung/1.jpg",
                                thumb: "img/projects/aluminium/lueftungsabdeckung/1%20%28Mobile%29.jpg",
                                title: "Schachtabdeckung ALU Lochblech"
                            },
                            { 
                                src: "img/projects/aluminium/lueftungsabdeckung/2.jpg",
                                thumb: "img/projects/aluminium/lueftungsabdeckung/2%20%28Mobile%29.jpg",
                                title: "Schachtabdeckung ALU Lochblech"
                            },
                            { 
                                src: "img/projects/aluminium/lueftungsabdeckung/3.jpg",
                                thumb: "img/projects/aluminium/lueftungsabdeckung/3%20%28Mobile%29.jpg",
                                title: "Schachtabdeckung ALU Lochblech"
                            }
                        ]
                    }
                ]
            },
            {
                id:"edelstahl",
                title: "Edelstahl",
                sections: [
                    { 
                        id: "garten",
                        title: "Garten und Haus",
                        description: `
                            Individuelle Gestaltung von Gartenmöbel und Dekorativen Gegenständen.<br/><br/>
                            Gartenmöbel aus Edelstahl sind langlebig, robust und witterungsbeständig.<br/><br/>
                            Durch die Kombination mit Holz bekommt der kalte Stahl etwas Warmes mit dem man jeden Garten und jedes Haus aufpeppt.`,
                        gallery: [
                            {
                                src:"img/projects/edelstahl/garten_und_haus/Briefkasten_Edelstahl-Glas.jpg",
                                thumb:"img/projects/edelstahl/garten_und_haus/Briefkasten_Edelstahl-Glas%20%28Mobile%29.jpg",
                                title: "Briefkasten Edelstahl/Glas"
                            },
                            {
                                src:"img/projects/edelstahl/garten_und_haus/Edelstahlbank_Kundenwunsch.jpg",
                                thumb:"img/projects/edelstahl/garten_und_haus/Edelstahlbank_Kundenwunsch%20%28Mobile%29.jpg",
                                title: "Edelstahlbank (Kundenwunsch)"
                            },
                            {
                                src:"img/projects/edelstahl/garten_und_haus/Edelstahlsäulen.jpg",
                                thumb:"img/projects/edelstahl/garten_und_haus/Edelstahlsäulen%20%28Mobile%29.jpg",
                                title: "Edelstahlsäulen"
                            },
                            {
                                src:"img/projects/edelstahl/garten_und_haus/Gartentisch_Edelstahl-Granit.jpg",
                                thumb:"img/projects/edelstahl/garten_und_haus/Gartentisch_Edelstahl-Granit%20%28Mobile%29.jpg",
                                title: "Gartentisch Edelstahl/Granit"
                            },
                            {
                                src:"img/projects/edelstahl/garten_und_haus/Schlauchhalter_Edelstahl.jpg",
                                thumb:"img/projects/edelstahl/garten_und_haus/Schlauchhalter_Edelstahl%20%28Mobile%29.jpg",
                                title: "Schlauchhalter Edelstahl"
                            },
                        ]
                    },
                    { 
                        id: "geradlinig",
                        title: "Geradlinig und Elegant",
                        description: `
                            Wenn Sie etwas Langlebiges aus Metall suchen, sind Sie hier genau richtig.<br/><br/>
                            Fast alles lässt sich aus Edelstahl fertigen.<br/><br/>
                            Ob Dekorative oder Bauliche Konstruktionen, lassen Sie mich wissen welche Lösung ich Ihnen anbieten kann. 
                            <br/><br/>
                            Ob Pflanztröge für meine Partnerfirma kuglerundtrinkl im Projekt Topfallee,<br/>
                            oder Stufenanschlüsse um unschöne Fugen zu verdecken, mit Beleuchtung bei der Familie T.`,
                        gallery: [
                            {
                                src:"img/projects/edelstahl/geradlinig_und_elegant/Edelstahl_Stufenanschluß_Tschürtz_1.JPG",
                                thumb:"img/projects/edelstahl/geradlinig_und_elegant/Edelstahl_Stufenanschluß_Tschürtz_1%20%28Mobile%29.jpg",
                                title:"Edelstahl Stufenanschluß"
                            },
                            {
                                src:"img/projects/edelstahl/geradlinig_und_elegant/Edelstahl_Stufenanschluß_Tschürtz_2.JPG",
                                thumb:"img/projects/edelstahl/geradlinig_und_elegant/Edelstahl_Stufenanschluß_Tschürtz_2%20%28Mobile%29.jpg",
                                title:"Edelstahl Stufenanschluß"
                            },
                            {
                                src:"img/projects/edelstahl/geradlinig_und_elegant/Edelstahl_Stufenanschluß_Tschürtz_3.JPG",
                                thumb:"img/projects/edelstahl/geradlinig_und_elegant/Edelstahl_Stufenanschluß_Tschürtz_3%20%28Mobile%29.jpg",
                                title:"Edelstahl Stufenanschluß"
                            },
                            {
                                src:"img/projects/edelstahl/geradlinig_und_elegant/Edelstahl_Stufenanschluß_Tschürtz_4.JPG",
                                thumb:"img/projects/edelstahl/geradlinig_und_elegant/Edelstahl_Stufenanschluß_Tschürtz_4%20%28Mobile%29.jpg",
                                title:"Edelstahl Stufenanschluß"
                            },
                            {
                                src:"img/projects/edelstahl/geradlinig_und_elegant/Pflanztröge_Edelstahl_Tschürtz_1.jpg",
                                thumb:"img/projects/edelstahl/geradlinig_und_elegant/Pflanztröge_Edelstahl_Tschürtz_1%20%28Mobile%29.jpg",
                                title:"Pflanzentrog Edelstahl"
                            },
                            {
                                src:"img/projects/edelstahl/geradlinig_und_elegant/Pflanztröge_Edelstahl_Tschürtz_2.jpg",
                                thumb:"img/projects/edelstahl/geradlinig_und_elegant/Pflanztröge_Edelstahl_Tschürtz_2%20%28Mobile%29.jpg",
                                title:"Pflanzentrog Edelstahl"
                            }
                        ]
                    },
                    { 
                        id: "gieskannenständer",
                        title: "Gieskannenständer",
                        description: `
                            Die Gemeinde Donnerskirchen wollte die Friedhofsbesucher entlasten, indem Sie die Wasserentnahmestelle neu organisierte.<br/><br/>
                            Die Handskizze die ich dem Bürgermeister zusendete entsprach auf Anhieb seinen Vorstellungen.<br/><br/>
                            Also fertigte ich die Ständer so, daß die Giesskannen von den Friedhofsbesuchern leicht entnommen werden konnten. `,
                        gallery: [
                            {
                                src:"img/projects/edelstahl/gieskannenständer/Giesskannentisch_Edelstahl_Donnerskirchen_1.JPG",
                                thumb:"img/projects/edelstahl/gieskannenständer/Giesskannentisch_Edelstahl_Donnerskirchen_1%20%28Mobile%29.jpg",
                                title:"Giesskannentisch Edelstahl"
                            },
                            {
                                src:"img/projects/edelstahl/gieskannenständer/Giesskannentisch_Edelstahl_Donnerskirchen_2.JPG",
                                thumb:"img/projects/edelstahl/gieskannenständer/Giesskannentisch_Edelstahl_Donnerskirchen_2%20%28Mobile%29.jpg",
                                title:"Giesskannentisch Edelstahl"
                            },
                            {
                                src:"img/projects/edelstahl/gieskannenständer/Giesskannentisch_Edelstahl_Donnerskirchen_3.JPG",
                                thumb:"img/projects/edelstahl/gieskannenständer/Giesskannentisch_Edelstahl_Donnerskirchen_3%20%28Mobile%29.jpg",
                                title:"Giesskannentisch Edelstahl"
                            },
                            {
                                src:"img/projects/edelstahl/gieskannenständer/Giesskannentisch-Rund_Edelstahl_Donnerskirchen_1.JPG",
                                thumb:"img/projects/edelstahl/gieskannenständer/Giesskannentisch-Rund_Edelstahl_Donnerskirchen_1%20%28Mobile%29.jpg",
                                title:"Giesskannentisch Edelstahl"
                            },
                            {
                                src:"img/projects/edelstahl/gieskannenständer/Giesskannentisch-Rund_Edelstahl_Donnerskirchen_2.JPG",
                                thumb:"img/projects/edelstahl/gieskannenständer/Giesskannentisch-Rund_Edelstahl_Donnerskirchen_2%20%28Mobile%29.jpg",
                                title:"Giesskannentisch Edelstahl"
                            }
                        ]
                    },
                    { 
                        id: "stossgriff",
                        title: "Stossgriff",
                        description: `
                            Fam. Z. hatte den Wunsch einen Individuellen Stossgriff für deren Eingangstür.<br/><br/>
                            Also fertigte ich diesen aus Edelstahl in Form eines Z's.<br/><br/>
                            Die Fam Z. ist nach wie vor Begeistert und hat heute noch viel Freude mit meiner Arbeit.`,
                        gallery: [
                             {
                                src:"img/projects/edelstahl/stossgriff/Stossgriff_Edelstahl_Fam-Z.JPG",
                                thumb:"img/projects/edelstahl/stossgriff/Stossgriff_Edelstahl_Fam-Z%20%28Mobile%29.jpg",
                                title:"Stossgriff Edelstahl"
                            }
                        ]
                    },
                    { 
                        id: "straight",
                        title: "Straight Ahead",
                        description: `
                            Für die Firma Blumen Trinkl in Loipersbach durfte ich die Einfassung des neu gestalteten Außenbereiches fertigen.<br/><br/>
                            Auf Grund der unebenen Gegebenheit wurden die Corten-Stahlbleche nur vorgefertigt.<br/><br/>
                            Direkt während der Bauphase, wurden diese dann auf die richtigen Abmessungen abgelängt bzw. verlängert und verbaut.`,
                        gallery: [
                            {
                                src:"img/projects/edelstahl/straight_ahead/Cortenstahl_Begrenzung_Trinkl_1.JPG",
                                thumb:"img/projects/edelstahl/straight_ahead/Cortenstahl_Begrenzung_Trinkl_1%20%28Mobile%29.jpg",
                                title:"Cortenstahl Begrenzung"
                            },
                            {
                                src:"img/projects/edelstahl/straight_ahead/Cortenstahl_Begrenzung_Trinkl_2.JPG",
                                thumb:"img/projects/edelstahl/straight_ahead/Cortenstahl_Begrenzung_Trinkl_2%20%28Mobile%29.jpg",
                                title:"Cortenstahl Begrenzung"
                            },
                            {
                                src:"img/projects/edelstahl/straight_ahead/Cortenstahl_Begrenzung_Trinkl_3.JPG",
                                thumb:"img/projects/edelstahl/straight_ahead/Cortenstahl_Begrenzung_Trinkl_3%20%28Mobile%29.jpg",
                                title:"Cortenstahl Begrenzung"
                            },
                            {
                                src:"img/projects/edelstahl/straight_ahead/Cortenstahl_Begrenzung_Trinkl_3.JPG",
                                thumb:"img/projects/edelstahl/straight_ahead/Cortenstahl_Begrenzung_Trinkl_3%20%28Mobile%29.jpg",
                                title:"Cortenstahl Begrenzung"
                            }
                        ]
                    },
                    { 
                        id: "terasse",
                        title: "Wohlfühlterasse",
                        description: `
                            Die Familie H. hat mich mit einer Terrassenkonstruktion und integriertem Windschutz beauftragt.<br/><br/>
                            Die Konstruktion liegt auf dem vorhandenen Balkon auf und stütz sich auf vier Säulen.<br/><br/>
                            Links wurden U-Profil als Montagehilfe für die Lerchenbretter verbaut, rechts L-Profile zur sicheren Glasbefestigung.<br/><br/>
                            Die Konstruktion wurde so geplant dass man sowohl im unteren als auch oberen Bereich ungestört entspannen kann. Die Verlegung der WPC-Paneele wurde von der Familie H. selbst durch geführt.`,
                        gallery: [
                             {
                                src:"img/projects/edelstahl/wohlfühlterasse/Edelstahl_Sichtschutz_Holz-Glas_Halwax_1.JPG",
                                thumb:"img/projects/edelstahl/wohlfühlterasse/Edelstahl_Sichtschutz_Holz-Glas_Halwax_1%20%28Mobile%29.jpg",
                                title:"Edelstahl Sichtschutz Holz/Glas"
                            },
                            {
                                src:"img/projects/edelstahl/wohlfühlterasse/Edelstahl_Sichtschutz_Holz-Glas_Halwax_2.JPG",
                                thumb:"img/projects/edelstahl/wohlfühlterasse/Edelstahl_Sichtschutz_Holz-Glas_Halwax_2%20%28Mobile%29.jpg",
                                title:"Edelstahl Sichtschutz Holz/Glas"
                            },
                            {
                                src:"img/projects/edelstahl/wohlfühlterasse/Edelstahl_Sichtschutz_Holz-Glas_Halwax_3.JPG",
                                thumb:"img/projects/edelstahl/wohlfühlterasse/Edelstahl_Sichtschutz_Holz-Glas_Halwax_3%20%28Mobile%29.jpg",
                                title:"Edelstahl Sichtschutz Holz/Glas"
                            },
                            {
                                src:"img/projects/edelstahl/wohlfühlterasse/Edelstahl_Sichtschutz_Holz-Glas_Halwax_4.JPG",
                                thumb:"img/projects/edelstahl/wohlfühlterasse/Edelstahl_Sichtschutz_Holz-Glas_Halwax_4%20%28Mobile%29.jpg",
                                title:"Edelstahl Sichtschutz Holz/Glas"
                            }
                        ]
                    }
                ]
            },
            {
                id:"fahrzeugmod",
                title: "Fahrzeug Modifizierung",
                sections: [
                    { 
                        id: "fz",
                        description: `
                            Ob Aufnahmebügel für ein Kajak (Eigenprojekt), oder Einladehilfe bzw. Sargsicherung für die Firma Bestattungsinstitut Wedl in Rust.<br/><br/>
                            Die Umsetzung ist sicher kein Problem, jedoch die Typisierung sollten Sie im Vorfeld abklären.`,
                        gallery: [
                             {
                                src:"img/projects/fahrzeugmod/1_Kajakhalterung.JPG",
                                thumb:"img/projects/fahrzeugmod/1_Kajakhalterung%20%28Mobile%29.jpg",
                                title:"Kajakhalterung"
                            },
                            {
                                src:"img/projects/fahrzeugmod/2_Kajakhalterung.JPG",
                                thumb:"img/projects/fahrzeugmod/2_Kajakhalterung%20%28Mobile%29.jpg",
                                title:"Kajakhalterung"
                            },
                            {
                                src:"img/projects/fahrzeugmod/3_Schienensystem_Edelstahl_Fahrzeugeinrichtung_Wedl.JPG",
                                thumb:"img/projects/fahrzeugmod/3_Schienensystem_Edelstahl_Fahrzeugeinrichtung_Wedl%20%28Mobile%29.jpg",
                                title:"Schienensystem Edelstahl"
                            },
                            {
                                src:"img/projects/fahrzeugmod/4_Schienensystem_Edelstahl_Fahrzeugeinrichtung_Wedl.JPG",
                                thumb:"img/projects/fahrzeugmod/4_Schienensystem_Edelstahl_Fahrzeugeinrichtung_Wedl%20%28Mobile%29.jpg",
                                title:"Schienensystem Edelstahl"
                            }
                        ]
                    }
                ]
            },
            {
                id:"laserschnitt",
                title: "Laserschneiden",
                sections: [
                    { 
                        id: "ls",
                        description: `
                            Mit der Bearbeitung des Laserschneidens lassen sich fast alle Materialien „schneiden“.<br/><br/>
                            Formen und Größen sind nur durch Material und Maschine begrenzt.<br/><br/>
                            Ob Dudelsackspieler 100 x 200 mm (2mm Edelstahl 1.4301), Blume des Lebens D 600 mm (aus 1mm Edelstahl 1.430) oder                                            
                            Sliding Stop 450 x 500 mm(aus 3mm Stahl S235JR).<br/><br/>
                            Schicken Sie ein Foto der gewünschten Form, Material und Größe.`,
                        gallery: [
                             {
                                src:"img/projects/laserschnitt/Bagpiper_Laserschnitt_Edelstahl_1.JPG",
                                thumb:"img/projects/laserschnitt/Bagpiper_Laserschnitt_Edelstahl_1%20%28Mobile%29.jpg",
                                title:"Bagpiper Laserschnitt Edelstahl"
                            },
                            {
                                src:"img/projects/laserschnitt/Blume_des_Lebens_Laserschnitt_Edelstahl_1.JPG",
                                thumb:"img/projects/laserschnitt/Blume_des_Lebens_Laserschnitt_Edelstahl_1%20%28Mobile%29.jpg",
                                title:"Blume des Lebens Laserschnitt Edelstahl"
                            },
                            {
                                src:"img/projects/laserschnitt/Blume_des_Lebens_Laserschnitt_Edelstahl_5.JPG",
                                thumb:"img/projects/laserschnitt/Blume_des_Lebens_Laserschnitt_Edelstahl_5%20%28Mobile%29.jpg",
                                title:"Blume des Lebens Laserschnitt Edelstahl"
                            },
                            {
                                src:"img/projects/laserschnitt/SlidingStop_Laserschnitt_Edelstahl_1.JPG",
                                thumb:"img/projects/laserschnitt/SlidingStop_Laserschnitt_Edelstahl_1%20%28Mobile%29.jpg",
                                title:"SlidingStop Laserschnitt Edelstahl"
                            },
                            {
                                src:"img/projects/laserschnitt/SlidingStop_Laserschnitt_Edelstahl_2.JPG",
                                thumb:"img/projects/laserschnitt/SlidingStop_Laserschnitt_Edelstahl_2%20%28Mobile%29.jpg",
                                title:"SlidingStop Laserschnitt Edelstahl"
                            }
                        ]
                    }
                ]
            },
            {
                id:"pulverbeschichtung",
                title: "Pulverbeschichtung",
                sections: [
                    { 
                        id: "pv",
                        description: `
                            Sie wollen Färbige Konstruktionen oder Gegenstände aus Stahl oder Aluminium!<br/>
                            Passend zu Ihrem Haus, oder in Ihrer Lieblingsfarbe!<br/><br/>
                            Ob Tore, Zäune oder Gebrauchsgegenstände in den von Ihnen gewünschten Farben, kein Problem.<br/><br/>
                            Schicken Sie einfach Ihre Idee, bei einem Gespräch können wir die Individuelle Lösung dann gemeinsam finden.`,
                        gallery: [
                             {
                                src:"img/projects/pulverbeschichtung/Klettergeruest_Schuhmann_1.jpg",
                                thumb:"img/projects/pulverbeschichtung/Klettergeruest_Schuhmann_1%20%28Mobile%29.jpg",
                                title:"Klettergeruest"
                            },
                            {
                                src:"img/projects/pulverbeschichtung/Schaukelgestell_Pulverbeschichtet_Scheiblhofer_1.jpg",
                                thumb:"img/projects/pulverbeschichtung/Schaukelgestell_Pulverbeschichtet_Scheiblhofer_1%20%28Mobile%29.jpg",
                                title:"Schaukelgestell Pulverbeschichtet"
                            },
                            {
                                src:"img/projects/pulverbeschichtung/Steckersäule_Scheiblhofer_1.JPG",
                                thumb:"img/projects/pulverbeschichtung/Steckersäule_Scheiblhofer_1%20%28Mobile%29.jpg",
                                title:"Steckersäule"
                            },
                            {
                                src:"img/projects/pulverbeschichtung/Steckersäule_Scheiblhofer_2.JPG",
                                thumb:"img/projects/pulverbeschichtung/Steckersäule_Scheiblhofer_2%20%28Mobile%29.jpg",
                                title:"Steckersäule"
                            },
                            {
                                src:"img/projects/pulverbeschichtung/Steckersäule_Scheiblhofer_3.JPG",
                                thumb:"img/projects/pulverbeschichtung/Steckersäule_Scheiblhofer_3%20%28Mobile%29.jpg",
                                title:"Steckersäule"
                            }
                        ]
                    }
                ]
            },
            {
                id:"restaurationen",
                title: "Restaurationen",
                sections: [
                    { 
                        id: "sk",
                        title: "Schlüsselkopie",
                        description: `
                            Die Firma weinbau-schreiner hat mich mit der Anfrage einer Schlüsselkopie kontaktiert.<br/>
                            Da das Haus samt Tor Denkmalgeschütz sei, könne man kein modernes Schloß einbauen.<br/>
                            Also braucht man eine Kopie der Schlüssel. 4 Stk wurden angefertigt.<br/><br/>
                            Jetzt muß niemand mehr warten, bis der jenige kommt, der den Schlüssel hat.<br/><br/>
                            Links – Original / Rechts - Restaurationskopie`,
                        gallery: [
                             {
                                src:"img/projects/restaurationen/schluesselkopie/Schlüssel_Replikation_1.JPG",
                                thumb:"img/projects/restaurationen/schluesselkopie/Schlüssel_Replikation_1%20%28Mobile%29.jpg",
                                title:"Schlüsselkopie"
                            }
                        ]

                    }
                ]
            },
            {
                id:"sonderanfertigungen",
                title: "Sonderanfertigungen",
                sections: [
                    { 
                        id: "abwurf",
                        title: "Abwurfstangen",
                        description: `
                            Der Kundenwusch war, etwas anderes zu haben als die anderen.<br/>
                            Dieser Kunde war bei mir genau Richtig.<br/><br/>
                            Es solle eine Trophäe sein.<br/>
                            Unter Absprache entschieden wir uns für die Kupfer-Lösung.`,
                        gallery: [
                             {
                                src:"img/projects/sonderanfertigungen/abwurfstangen/Trophäe_1.JPG",
                                thumb:"img/projects/sonderanfertigungen/abwurfstangen/Trophäe_1%20%28Mobile%29.jpg",
                                title:"Trophäe"
                            },
                            {
                                src:"img/projects/sonderanfertigungen/abwurfstangen/Trophäe_2.JPG",
                                thumb:"img/projects/sonderanfertigungen/abwurfstangen/Trophäe_2%20%28Mobile%29.jpg",
                                title:"Trophäe"
                            }
                        ]
                    },
                    { 
                        id: "drachenei",
                        title: "Drachenei",
                        description: `
                            Der Kundenwunsch war das Drachenei aus Game of Thrones.<br/><br/>
                            Die Herausforderung bei diesem Projekt lag darin eine (für mich bis dahin) neue Metallbearbeitungstechniken zu verwenden.<br/>
                            Das Metalldrücken : Die beiden Halbschalen wurden aus Kupferblech zugeschnitten und anschließend rotieren über eine Holzform gedrückt.<br/>
                            Anschließend wurden die beiden Hälften zusammen gelötet.<br/><br/>
                            Die Schuppen habe ich aus Messing gefertigt und durch Treiben in Form gebracht.<br/>
                            Auch diese wurden auf das EI gelötet. Durch polieren erzielte ich die gewünschte Optik.`,
                        gallery: [
                             {
                                src:"img/projects/sonderanfertigungen/drachenei/1_Kupferblech-1mm.JPG",
                                thumb:"img/projects/sonderanfertigungen/drachenei/1_Kupferblech-1mm%20%28Mobile%29.jpg",
                                title:"Kupferblech 1mm"
                            },
                            {
                                src:"img/projects/sonderanfertigungen/drachenei/2_Zuschnitt-Eierschale_Kupfer.JPG",
                                thumb:"img/projects/sonderanfertigungen/drachenei/2_Zuschnitt-Eierschale_Kupfer%20%28Mobile%29.jpg",
                                title:"Zuschnitt Eierschale Kupfer"
                            },
                            {
                                src:"img/projects/sonderanfertigungen/drachenei/3_Gedrückte-Halbschalen_Kupfer.JPG",
                                thumb:"img/projects/sonderanfertigungen/drachenei/3_Gedrückte-Halbschalen_Kupfer%20%28Mobile%29.jpg",
                                title:"Gedrückte Halbschalen Kupfer"
                            },
                            {
                                src:"img/projects/sonderanfertigungen/drachenei/4_Gedrückte-Halbschalen_Kupfer.JPG",
                                thumb:"img/projects/sonderanfertigungen/drachenei/4_Gedrückte-Halbschalen_Kupfer%20%28Mobile%29.jpg",
                                title:"Gedrückte Halbschalen Kupfer"
                            },
                            {
                                src:"img/projects/sonderanfertigungen/drachenei/5_Zuschnitt_Schuppen_Messing.JPG",
                                thumb:"img/projects/sonderanfertigungen/drachenei/5_Zuschnitt_Schuppen_Messing%20%28Mobile%29.jpg",
                                title:"Zuschnitt Schuppen Messing"
                            },
                            {
                                src:"img/projects/sonderanfertigungen/drachenei/6_Löten_Schuppen-Messing_Kupferei.JPG",
                                thumb:"img/projects/sonderanfertigungen/drachenei/6_Löten_Schuppen-Messing_Kupferei%20%28Mobile%29.jpg",
                                title:"Löten Schuppen Messing"
                            },
                            {
                                src:"img/projects/sonderanfertigungen/drachenei/7_Löten_Schuppen-Messing_Kupferei.JPG",
                                thumb:"img/projects/sonderanfertigungen/drachenei/7_Löten_Schuppen-Messing_Kupferei%20%28Mobile%29.jpg",
                                title:"Löten Schuppen Messing"
                            },
                            {
                                src:"img/projects/sonderanfertigungen/drachenei/8_Drachenei.jpg",
                                thumb:"img/projects/sonderanfertigungen/drachenei/8_Drachenei%20%28Mobile%29.jpg",
                                title:"Drachenei"
                            }
                        ]
                    },
                    { 
                        id: "hlb",
                        title: "Heilige Barbara",
                        description: `
                        Ob Dekorations-, Gebrauchsgegenstände oder Ehrenpreise und Pokale.<br/><br/>
                        Sachen die Sie nicht so leicht wo finden, schicken Sie mir eine Anfrage.<br/><br/>
                        Wenn es für mich Technisch möglich ist freue ich mich über jede Herausforderung.<br/><br/>
                        Heilige Barbara (Schutzpatronin des Bergbau in einer Gebrochenen Patronenhülse) 
                        für Studenten der Universität in Leoben.`,
                        gallery: [
                             {
                                src:"img/projects/sonderanfertigungen/heilige%20barbara/IMG_2734.JPG",
                                thumb:"img/projects/sonderanfertigungen/heilige%20barbara/IMG_2734%20%28Mobile%29.jpg",
                                title:"Heilige Barbara"
                            },
                            {
                                src:"img/projects/sonderanfertigungen/heilige%20barbara/IMG_2735.JPG",
                                thumb:"img/projects/sonderanfertigungen/heilige%20barbara/IMG_2735%20%28Mobile%29.jpg",
                                title:"Heilige Barbara"
                            },
                            {
                                src:"img/projects/sonderanfertigungen/heilige%20barbara/IMG_2736.JPG",
                                thumb:"img/projects/sonderanfertigungen/heilige%20barbara/IMG_2736%20%28Mobile%29.jpg",
                                title:"Heilige Barbara"
                            },
                            {
                                src:"img/projects/sonderanfertigungen/heilige%20barbara/IMG_2737.JPG",
                                thumb:"img/projects/sonderanfertigungen/heilige%20barbara/IMG_2737%20%28Mobile%29.jpg",
                                title:"Heilige Barbara"
                            }
                        ]
                    },
                    { 
                        id: "rack",
                        title: "Rack-Stange",
                        description: ``,
                        gallery: [
                             {
                                src:"img/projects/sonderanfertigungen/rack/Rack_1.JPG",
                                thumb:"img/projects/sonderanfertigungen/rack/Rack_1%20%28Mobile%29.jpg",
                                title:"Rack"
                            },
                            {
                                src:"img/projects/sonderanfertigungen/rack/Rack_2.JPG",
                                thumb:"img/projects/sonderanfertigungen/rack/Rack_2%20%28Mobile%29.jpg",
                                title:"Rack"
                            }
                        ]
                    },
                    { 
                        id: "storchennest",
                        title: "Storchennest",
                        description: `
                            Fam. Grasl-G. kontaktierte mich bezüglich Herstellung einer Konstruktion für die Umsiedlung eines Storchennests.<br/><br/>
                            Das Ganze wurde ein echt cooles Projekt das alle Parteien zufrieden stellte.<br/><br/>
                            Die Konstruktion stellte ich aus Edelstahl her, worauf dann das Grundnest des Storchenvereins Rust befestigt wurde.`,
                        gallery: [
                            {
                                src:"img/projects/sonderanfertigungen/storchennest/Storchenabwehr_Alter_Neststandort.jpg",
                                thumb:"img/projects/sonderanfertigungen/storchennest/Storchenabwehr_Alter_Neststandort%20%28Mobile%29.jpg",
                                title:"Storchenabwehr Alter Neststandort"
                            },
                            {
                                src:"img/projects/sonderanfertigungen/storchennest/Storchenabwehr_Alter_Neststandort.jpg",
                                thumb:"img/projects/sonderanfertigungen/storchennest/Storchenabwehr_Alter_Neststandort%20%28Mobile%29.jpg",
                                title:"Storchennest Konstruktion"
                            },
                            {
                                src:"img/projects/sonderanfertigungen/storchennest/Storchennest-Konstruktion_2.jpg",
                                thumb:"img/projects/sonderanfertigungen/storchennest/Storchennest-Konstruktion_2%20%28Mobile%29.jpg",
                                title:"Storchennest Konstruktion"
                            },
                            {
                                src:"img/projects/sonderanfertigungen/storchennest/Storchennest-Konstruktion_3.jpg",
                                thumb:"img/projects/sonderanfertigungen/storchennest/Storchennest-Konstruktion_3%20%28Mobile%29.jpg",
                                title:"Storchennest Konstruktion"
                            },
                            {
                                src:"img/projects/sonderanfertigungen/storchennest/Storchennest-Konstruktion_4.jpg",
                                thumb:"img/projects/sonderanfertigungen/storchennest/Storchennest-Konstruktion_4%20%28Mobile%29.jpg",
                                title:"Storchennest Konstruktion"
                            },
                            {
                                src:"img/projects/sonderanfertigungen/storchennest/Storchennest-Konstruktion_5.JPG",
                                thumb:"img/projects/sonderanfertigungen/storchennest/Storchennest-Konstruktion_5%20%28Mobile%29.jpg",
                                title:"Storchennest Konstruktion"
                            },
                            {
                                src:"img/projects/sonderanfertigungen/storchennest/Storchennest-Konstruktion_6.JPG",
                                thumb:"img/projects/sonderanfertigungen/storchennest/Storchennest-Konstruktion_6%20%28Mobile%29.jpg",
                                title:"Storchennest Konstruktion"
                            }
                        ]
                    }
                ]
            },
            {
                id:"unterkonstruktionen",
                title: "Unterkonstruktionen",
                sections: [
                    { 
                        id: "uk",
                        title: "Unsichtbar und doch stabil",
                        description: `
                            Unterkonstruktionen sind das Herzstück die Ihrer Idee die Form geben sollen, ob sichtbar oder nicht.<br/><br/>
                            Aus welchen Material Unterkonstruktionen gefertigt werden entscheidet meist der Verwendungszweck.<br/><br/>
                            Teilen Sie mir noch heute Ihre Idee mit und wir besprechen gemeinsam die Lösung die am Effektivesten ist.`,
                        gallery: [
                             {
                                src:"img/projects/unterkonstruktionen/Edelstahlkonstruktion_Sitzbank_1.jpg",
                                thumb:"img/projects/unterkonstruktionen/Edelstahlkonstruktion_Sitzbank_1%20%28Mobile%29.jpg",
                                title:"Edelstahlkonstruktion Sitzbank"
                            },
                            {
                                src:"img/projects/unterkonstruktionen/Stahlkonstruktion_Stufen_1.JPG",
                                thumb:"img/projects/unterkonstruktionen/Stahlkonstruktion_Stufen_1%20%28Mobile%29.jpg",
                                title:"Stahlkonstruktion Stufen"
                            },
                            {
                                src:"img/projects/unterkonstruktionen/Stahlkonstruktion_Stufen_2.JPG",
                                thumb:"img/projects/unterkonstruktionen/Stahlkonstruktion_Stufen_2%20%28Mobile%29.jpg",
                                title:"Stahlkonstruktion Stufen"
                            },
                            {
                                src:"img/projects/unterkonstruktionen/Stahlkonstruktion_Stufen_3.JPG",
                                thumb:"img/projects/unterkonstruktionen/Stahlkonstruktion_Stufen_3%20%28Mobile%29.jpg",
                                title:"Stahlkonstruktion Stufen"
                            },
                            {
                                src:"img/projects/unterkonstruktionen/Stahlkonstruktion_Stufen_4.JPG",
                                thumb:"img/projects/unterkonstruktionen/Stahlkonstruktion_Stufen_4%20%28Mobile%29.jpg",
                                title:"Stahlkonstruktion Stufen"
                            },
                            {
                                src:"img/projects/unterkonstruktionen/Stahlkonstruktion_Webkugel_Trinkl_1.JPG",
                                thumb:"img/projects/unterkonstruktionen/Stahlkonstruktion_Webkugel_Trinkl_1%20%28Mobile%29.jpg",
                                title:"Stahlkonstruktion Webkugel"
                            },
                            {
                                src:"img/projects/unterkonstruktionen/Stahlkonstruktion_Webkugel_Trinkl_2.JPG",
                                thumb:"img/projects/unterkonstruktionen/Stahlkonstruktion_Webkugel_Trinkl_2%20%28Mobile%29.jpg",
                                title:"Stahlkonstruktion Webkugel"
                            }
                        ]

                    }
                ]
            },     
        ],
    },
    mounted: function() {
        var app = this;
        app.pswpElement = document.querySelectorAll('.pswp')[0];

        var hash = window.location.hash.substr(1);
        if(hash && hash != "")
            this.menu = hash;
        
         $(window).on('popstate', function() {
            var hash = location.hash.substr(1);
            if(hash == "")
                hash = "start";
            app.menu = hash;
         });

        this.$nextTick(()=>{
            $.fatNav();
            $('#start').fullpage();
            $('.swipebox').swipebox();
        });
    },
    updated: function() {
        var app = this;
        this.$nextTick(()=>{
            $('.swipebox').swipebox();
        });
    },
    methods: {
        nextPage: function() {
            $.fn.fullpage.moveSectionDown();
        }
    }
});