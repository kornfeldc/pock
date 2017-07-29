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
                bg: "img/start/sw_start", 
                img: "img/logo.png",
                menu: "start",
                imgStyle: "border-bottom: solid 3px yellow;" 
            },
            {
                bg: "img/start/sw_aluminium",
                menu: "aluminium",
                title: "Aluminium"
            },
            {
                bg: "img/start/sw_edelstahl",
                menu: "edelstahl",
                title: "Edelstahl"
            },
            {
                bg: "img/start/sw_fahrzeugmod",
                menu: "fahrzeugmod",
                title: "Fahrzeug Modifizierung"
            },
            {
                bg: "img/start/sw_laserschnitt",
                menu: "laserschnitt",
                title: "Laserschnitt"
            },
            {
                bg: "img/start/sw_pulverbeschichtung",
                menu: "pulverbeschichtung",
                title: "Pulver<wbr>beschichtung"
            },
            {
                bg: "img/start/sw_restaurationen",
                menu: "restaurationen",
                title: "Restaurationen"
            },
            {
                bg: "img/start/sw_unterkonstruktionen",
                menu: "unterkonstruktionen",
                title: "Unter<wbr>konstruktionen"
            },
            {
                bg: "img/start/sw_sonderanfertigungen",
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
                { timespan: "2016", title: "Prüfungstätikeit WKO Wifi-Eisenstadt im Bereich LAP - Metalltechnik" },
                { timespan: "2016", title: "Meisterprüfung Metalltechnik" },
                { timespan: "2012-", title: "Ausbildung zum Fachtrainer / ABT-AusbilderInnentraining im BFI " },
                { timespan: "2011-", title: "Selbstständigkeit" },
                { timespan: "2010-2011", title: "Techniker, Fa. Family Park Neusiedlersee" },
                { timespan: "2005-2010", title: "Facharbeiter, Werkzeugmacher, Fa. Proform Prototypen" },
                { timespan: "1995-2005", title: "Facharbeiter, Werkzeugmacher, Fa. WFK" },
                { timespan: "1995", title: "Lehrabschlussprüfung" },
                { timespan: "1991-1995", title: "Lehrlingsausbildung zum Werkzeugmacher Fa. WFK" }
            ],
            contactheader: "Kontakt",
            contact: {
                adress: "<i class='fa-li fa fa-map-marker'></i>Schulgasse 9<br/>7062 St. Margarethen",
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
                        gallery: {
                            path: "img/projects/aluminium/lueftungsabdeckung",
                            titles: [
                                "Schachtabdeckung ALU Lochblech",
                                "Schachtabdeckung ALU Lochblech",
                                "Schachtabdeckung ALU Lochblech",
                                "Schachtabdeckung ALU Lochblech"
                            ]
                        }
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
                        gallery: {
                            path: "img/projects/edelstahl/garten_und_haus",
                            titles: [
                                "Briefkasten Edelstahl/Glas",
                                "Edelstahlbank (Kundenwunsch)",
                                "Edelstahlsäulen",
                                "Gartentisch Edelstahl/Granit",
                                "Schlauchhalter Edelstahl"
                            ]
                        }
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
                        gallery: {
                            path: "img/projects/edelstahl/geradlinig_und_elegant",
                            titles: [
                            "Edelstahl Stufenanschluß",
                                "Edelstahl Stufenanschluß",
                                "Edelstahl Stufenanschluß",
                                "Edelstahl Stufenanschluß",
                                "Pflanzentrog Edelstahl",
                                "Pflanzentrog Edelstahl"
                            ]
                        }
                    },
                    { 
                        id: "gieskannenständer",
                        title: "Gieskannenständer",
                        description: `
                            Die Gemeinde Donnerskirchen wollte die Friedhofsbesucher entlasten, indem Sie die Wasserentnahmestelle neu organisierte.<br/><br/>
                            Die Handskizze die ich dem Bürgermeister zusendete entsprach auf Anhieb seinen Vorstellungen.<br/><br/>
                            Also fertigte ich die Ständer so, daß die Giesskannen von den Friedhofsbesuchern leicht entnommen werden konnten. `,
                        gallery: {
                            path: "img/projects/edelstahl/gieskannestaender",
                            titles: [
                                "Giesskannentisch Edelstahl",
                                "Giesskannentisch Edelstahl",
                                "Giesskannentisch Edelstahl",
                                "Giesskannentisch Edelstahl",
                                "Giesskannentisch Edelstahl"
                            ]
                        }
                    },
                    { 
                        id: "stossgriff",
                        title: "Stossgriff",
                        description: `
                            Fam. Z. hatte den Wunsch einen Individuellen Stossgriff für deren Eingangstür.<br/><br/>
                            Also fertigte ich diesen aus Edelstahl in Form eines Z's.<br/><br/>
                            Die Fam Z. ist nach wie vor Begeistert und hat heute noch viel Freude mit meiner Arbeit.`,
                        gallery: {
                            path: "img/projects/edelstahl/stossgriff",
                            titles: [
                                "Stossgriff Edelstahl"
                            ]
                       }
                    },
                    { 
                        id: "straight",
                        title: "Straight Ahead",
                        description: `
                            Für die Firma Blumen Trinkl in Loipersbach durfte ich die Einfassung des neu gestalteten Außenbereiches fertigen.<br/><br/>
                            Auf Grund der unebenen Gegebenheit wurden die Corten-Stahlbleche nur vorgefertigt.<br/><br/>
                            Direkt während der Bauphase, wurden diese dann auf die richtigen Abmessungen abgelängt bzw. verlängert und verbaut.`,
                        gallery: {
                            path: "img/projects/edelstahl/straightahead",
                            titles: [
                                "Cortenstahl Begrenzung",
                                "Cortenstahl Begrenzung",
                                "Cortenstahl Begrenzung",
                                "Cortenstahl Begrenzung"
                            ]
                        }
                    },
                    { 
                        id: "terasse",
                        title: "Wohlfühlterasse",
                        description: `
                            Die Familie H. hat mich mit einer Terrassenkonstruktion und integriertem Windschutz beauftragt.<br/><br/>
                            Die Konstruktion liegt auf dem vorhandenen Balkon auf und stütz sich auf vier Säulen.<br/><br/>
                            Links wurden U-Profil als Montagehilfe für die Lerchenbretter verbaut, rechts L-Profile zur sicheren Glasbefestigung.<br/><br/>
                            Die Konstruktion wurde so geplant dass man sowohl im unteren als auch oberen Bereich ungestört entspannen kann. Die Verlegung der WPC-Paneele wurde von der Familie H. selbst durch geführt.`,
                        gallery: {
                            path: "img/projects/edelstahl/terasse",
                            titles: [
                                "Edelstahl Sichtschutz Holz/Glas",
                                "Edelstahl Sichtschutz Holz/Glas",
                                "Edelstahl Sichtschutz Holz/Glas",
                                "Edelstahl Sichtschutz Holz/Glas"
                            ]
                        }
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
                        gallery: {
                            path: "img/projects/fahrzeugmod",
                            titles: [
                                "Kajakhalterung",
                                "Kajakhalterung",
                                "Schienensystem Edelstahl",
                                "Schienensystem Edelstahl"
                            ]
                        }
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
                        gallery: {
                            path: "img/projects/laserschnitt",
                            titles: [
                                "Bagpiper Laserschnitt Edelstahl",
                                "Blume des Lebens Laserschnitt Edelstahl",
                                "Blume des Lebens Laserschnitt Edelstahl",
                                "SlidingStop Laserschnitt Edelstahl",
                                "SlidingStop Laserschnitt Edelstahl"
                            ]
                        }
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
                        gallery: {
                            path: "img/projects/pulverbeschichtung",
                            titles: [
                                "Klettergeruest",
                                "Schaukelgestell Pulverbeschichtet",
                                "Steckersäule",
                                "Steckersäule",
                                "Steckersäule"
                            ]
                        }
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
                        gallery: {
                            path: "img/projects/restaurationen/schluesselkopie",
                            titles: [
                                "Schlüsselkopie"
                            ]
                        }
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
                        gallery: {
                            path: "img/projects/sonderanfertigungen/abwurfstangen",
                            titles: [
                                "Trophäe","Trophäe"
                            ]
                        }
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
                        gallery: {
                            path: "img/projects/sonderanfertigungen/drachenei",
                            titles: [
                                "Kupferblech 1mm",
                                "Zuschnitt Eierschale Kupfer",
                                "Gedrückte Halbschalen Kupfer",
                                "Gedrückte Halbschalen Kupfer",
                                "Zuschnitt Schuppen Messing",
                                "Löten Schuppen Messing",
                                "Löten Schuppen Messing",
                                "Drachenei"
                            ]
                        }
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
                        gallery: {
                            path: "img/projects/sonderanfertigungen/heiligebarbara",
                            titles: [
                                "Heilige Barbara",
                                "Heilige Barbara",
                                "Heilige Barbara",
                                "Heilige Barbara"
                            ]
                        }
                    },
                    { 
                        id: "rack",
                        title: "Rack-Stange",
                        description: ``,
                        gallery: {
                            path: "img/projects/sonderanfertigungen/rack",
                            titles: [
                                "Rack",
                                "Rack"
                            ]
                        }
                    },
                    { 
                        id: "storchennest",
                        title: "Storchennest",
                        description: `
                            Fam. Grasl-G. kontaktierte mich bezüglich Herstellung einer Konstruktion für die Umsiedlung eines Storchennests.<br/><br/>
                            Das Ganze wurde ein echt cooles Projekt das alle Parteien zufrieden stellte.<br/><br/>
                            Die Konstruktion stellte ich aus Edelstahl her, worauf dann das Grundnest des Storchenvereins Rust befestigt wurde.`,
                        gallery: {
                            path: "img/projects/sonderanfertigungen/storchennest",
                            titles: [
                                "Storchenabwehr Alter Neststandort",
                                "Storchennest Konstruktion",
                                "Storchennest Konstruktion",
                                "Storchennest Konstruktion",
                                "Storchennest Konstruktion",
                                "Storchennest Konstruktion",
                                "Storchennest Konstruktion"
                            ]
                        }
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
                        gallery: {
                            path: "img/projects/unterkonstruktionen",
                            titles: [
                                "Edelstahlkonstruktion Sitzbank",
                                "Stahlkonstruktion Stufen",
                                "Stahlkonstruktion Stufen",
                                "Stahlkonstruktion Stufen",
                                "Stahlkonstruktion Stufen",
                                "Stahlkonstruktion Webkugel",
                                "Stahlkonstruktion Webkugel"
                            ]
                        }
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

            if(app.menu != "start") {
                //$('#start').fullpage("destroy","all");
                $.fn.fullpage.destroy('all');
                //$("html").removeClass("fp-enabled");
            }
            else { 
                //$("html").addClass("fp-enabled");
                $('#start').fullpage();
            }
        });
    },
    methods: {
        nextPage: function() {
            $.fn.fullpage.moveSectionDown();
        },
        getStartImageExtenstion: function() {
            if($(window).width() < 800)
                return "_small.png";
            return ".png";
        }
    }
});