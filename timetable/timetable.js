const days = ["Hétfő", "Kedd", "Szerda", "Csütörtök", "Péntek"]
const colorMap = {
    "mt": "turquoise",
    "sp": "orange",
    "ol": "orange",
    "né": "orange",
    "fr": "orange",

    "of": "lightskyblue",
    "a": "lawngreen",
    "inf": "gold",
    "i": "yellow",
    "ny": "yellow"
}
const nyf =
    [
        [
            //Hétfő-0
            [
                {
                    group: "szt",
                    name: "Darabánt",
                    subject: "mt",
                    room: "I.30"
                },
                {
                    group: "tk"
                }
            ],
            //Hétfő-1
            [
                {
                    group: "szt",
                    name: "Krajnyák",
                    subject: "inf",
                    room: "Szt.2"
                },
                {
                    group: "tk",
                    name: "Szabados",
                    subject: "inf",
                    room: "Tk."
                }
            ],
            //Hétfő-2
            [
                {
                    group: "szt",
                    name: "Krajnyák",
                    subject: "inf",
                    room: "Szt.2"
                },
                {
                    group: "tk",
                    name: "Pók",
                    subject: "inf",
                    room: "Tk."
                }
            ],
            //Hétfő-3
            [
                {
                    group: "sp",
                    name: "Sum",
                    subject: "sp",
                    room: "Sp."
                },
                {
                    group: "ol",
                    name: "Gianelli",
                    subject: "ol",
                    room: "Ol.2"
                },
                {
                    group: "né1",
                    name: "Halász",
                    subject: "né",
                    room: "R."
                },
                {
                    group: "né2",
                    name: "Sótiné",
                    subject: "né",
                    room: "N."
                },
                {
                    group: "fr",
                    name: "Szabolcsi",
                    subject: "fr",
                    room: "Fr."
                }
            ],
            //Hétfő-4
            [
                {

                }
            ],
            //Hétfő-5
            [
                {
                    group: "an1",
                    name: "Varga Bo.",
                    subject: "a",
                    room: "I.30"
                },
                {
                    group: "an2",
                    name: "Hajba",
                    subject: "a",
                    room: "Szt.3"
                },
                {
                    group: "an3",
                    name: "Seprenyi",
                    subject: "a",
                    room: "II.41"
                },
                {
                    group: "an4",
                    name: "Tóth",
                    subject: "a",
                    room: "A.3"
                }
            ],
            //Hétfő-6
            [
                {
                    group: "an1",
                    name: "Varga Bo.",
                    subject: "a",
                    room: "I.30"
                },
                {
                    group: "an2",
                    name: "Bertók",
                    subject: "a",
                    room: "Szt.3"
                },
                {
                    group: "an3",
                    name: "Seprenyi",
                    subject: "a",
                    room: "II.41"
                },
                {
                    group: "an4",
                    name: "Tóth",
                    subject: "a",
                    room: "A.3"
                }
            ],
            //Hétfő-7
            [
                {

                }
            ],
            //Hétfő-8
            [
                {

                }
            ]
        ],
        [
            //Kedd-0
            [
                {

                }
            ],
            //Kedd-1
            [
                {
                    group: "sp",
                    name: "Sum",
                    subject: "sp",
                    room: "Sp."
                },
                {
                    group: "ol",
                    name: "Gianelli",
                    subject: "ol",
                    room: "Ol.1"
                },
                {
                    group: "né1",
                    name: "Halász",
                    subject: "né",
                    room: "N."
                },
                {
                    group: "né2",
                    name: "Sótiné",
                    subject: "né",
                    room: "A.1"
                },
                {
                    group: "fr",
                    name: "Szabolcsi",
                    subject: "fr",
                    room: "Fr."
                }
            ],
            //Kedd-2
            [
                {
                    group: "sp",
                    name: "Sum",
                    subject: "sp",
                    room: "Sp."
                },
                {
                    group: "ol",
                    name: "Gianelli",
                    subject: "ol",
                    room: "Ol.1"
                },
                {
                    group: "né1",
                    name: "Halász",
                    subject: "né",
                    room: "N."
                },
                {
                    group: "né2",
                    name: "Sótiné",
                    subject: "né",
                    room: "A.1"
                },
                {
                    group: "fr"
                }
            ],
            //Kedd-3
            [
                {
                    group: "szt",
                    name: "Tóth",
                    subject: "a",
                    room: "F.10"
                },
                {
                    group: "tk",
                    name: "Krajnyák",
                    subject: "mt",
                    room: "I.30"
                }
            ],
            //Kedd-4
            [
                {
                    group: "szt",
                    name: "Darabánt",
                    subject: "mt",
                    room: "I.30"
                },
                {
                    group: "tk",
                    name: "Papp L",
                    subject: "inf",
                    room: "Tk."
                }
            ],
            //Kedd-5
            [
                {
                    group: "szt",
                    name: "Krajnyák",
                    subject: "inf",
                    room: "Szt.2"
                },
                {
                    group: "tk",
                    name: "Papp L",
                    subject: "inf",
                    room: "Tk."
                }
            ],
            //Kedd-6
            [
                {
                    group: "an1",
                    name: "Varga Bo.",
                    subject: "a",
                    room: "N."
                },
                {
                    group: "an2",
                    name: "Bertók",
                    subject: "a",
                    room: "A.2"
                },
                {
                    group: "an3",
                    name: "Seprenyi",
                    subject: "a",
                    room: "II.41"
                },
                {
                    group: "an4",
                    name: "Juhász A.",
                    subject: "a",
                    room: "A.3"
                }
            ],
            //Kedd-7
            [
                {

                }
            ],
            //Kedd-8
            [
                {

                }
            ]
        ],
        [
            //Szerda-0
            [
                {
                    group: "sp",
                    name: "Sum",
                    subject: "sp",
                    room: "Sp."
                },
                {
                    group: "ol",
                    name: "Gianelli",
                    subject: "ol",
                    room: "Ol.1"
                },
                {
                    group: "né1"
                },
                {
                    group: "né2"
                },
                {
                    group: "fr"
                }
            ],
            //Szerda-1
            [
                {
                    name: "Krajnyák",
                    subject: "of",
                    room: "I.30"
                }
            ],
            //Szerda-2
            [
                {
                    group: "an1",
                    name: "Varga Bo.",
                    subject: "a",
                    room: "I.30"
                },
                {
                    group: "an3",
                    name: "Seprenyi",
                    subject: "a",
                    room: "A.2"
                },
                {
                    group: "an2",
                    name: "Bertók",
                    subject: "a",
                    room: "A.1"
                },
                {
                    group: "an4",
                    name: "Hajba",
                    subject: "a",
                    room: "Szt.3"
                }
            ],
            //Szerda-3
            [
                {
                    group: "an1",
                    name: "Varga Bo.",
                    subject: "a",
                    room: "A.1"
                },
                {
                    group: "an2",
                    name: "Huszár",
                    subject: "a",
                    room: "I.30"
                },
                {
                    group: "an3",
                    name: "Seprenyi",
                    subject: "a",
                    room: "A.2"
                },
                {
                    group: "an4",
                    name: "Tóth",
                    subject: "a",
                    room: "F.18"
                }
            ],
            //Szerda-4
            [
                {

                }
            ],
            //Szerda-5
            [
                {
                    group: "szt",
                    name: "P.-Pásztor",
                    subject: "i",
                    room: "I.39."
                },
                {
                    group: "tk",
                    name: "Krajnyák",
                    subject: "mt",
                    room: "T.2"
                }
            ],
            //Szerda-6
            [
                {

                }
            ],
            //Szerda-7
            [
                {

                }
            ],
            //Szerda-8
            [
                {

                }
            ]
        ],
        [
            //Csütörtök-0
            [
                {
                    group: "an1"
                },
                {
                    group: "an2"
                },
                {
                    group: "an3",
                    name: "Seprenyi",
                    subject: "a",
                    room: "II.41"
                },
                {
                    group: "an4"
                }
            ],
            //Csütörtök-1
            [
                {
                    group: "an1",
                    name: "Varga Bo.",
                    subject: "a",
                    room: "F.8"
                },
                {
                    group: "an2",
                    name: "Huszár",
                    subject: "a",
                    room: "A.2"
                },
                {
                    group: "an3",
                    name: "Seprenyi",
                    subject: "a",
                    room: "II.41"
                },
                {
                    group: "an4",
                    name: "Tóth",
                    subject: "a",
                    room: "I.30"
                }
            ],
            //Csütörtök-2
            [
                {
                    group: "sp",
                    name: "Sum",
                    subject: "sp",
                    room: "D."
                },
                {
                    group: "ol",
                    name: "Gianelli",
                    subject: "ol",
                    room: "F.9"
                },
                {
                    group: "né1",
                    name: "Halász",
                    subject: "né",
                    room: "Szt.3"
                },
                {
                    group: "né2",
                    name: "Sótiné",
                    subject: "né",
                    room: "II.51"
                },
                {
                    group: "fr",
                    name: "Szabolcsi",
                    subject: "fr",
                    room: "II.42"
                }
            ],
            //Csütörtök-3
            [
                {
                    group: "szt",
                    name: "Krajnyák",
                    subject: "inf",
                    room: "Szt.1"
                },
                {
                    group: "tk",
                    name: "P.-Pásztor",
                    subject: "ny",
                    room: "I.30"
                }
            ],
            //Csütörtök-4
            [
                {
                    group: "szt",
                    name: "Darabánt",
                    subject: "mt",
                    room: "M."
                },
                {
                    group: "tk",
                    name: "Krajnyák",
                    subject: "mt",
                    room: "T.2"
                }
            ],
            //Csütörtök-5
            [
                {
                    group: "szt"
                },
                {
                    group: "tk",
                    name: "Papp L.",
                    subject: "inf",
                    room: "Tk."
                }
            ]
            ,
            //Csütörtök-6
            [
                {

                }
            ],
            //Csütörtök-7
            [
                {

                }
            ],
            //Csütörtök-8
            [
                {

                }
            ]
        ],
        [
            //Péntek-0
            [
                {

                }
            ],
            //Péntek-1
            [
                {

                }
            ],
            //Péntek-2
            [
                {
                    group: "an1",
                    name: "Varga Bo.",
                    subject: "a",
                    room: "I.30"
                },
                {
                    group: "an2",
                    name: "Huszár",
                    subject: "a",
                    room: "I.32"
                },
                {
                    group: "an3",
                    name: "Seprenyi",
                    subject: "a",
                    room: "Szt.3"
                },
                {
                    group: "an4",
                    name: "Tóth",
                    subject: "a",
                    room: "R."
                }
            ],
            //Péntek-2
            [
                {
                    group: "an1",
                    name: "Varga Bo.",
                    subject: "a",
                    room: "I.30"
                },
                {
                    group: "an2",
                    name: "Huszár",
                    subject: "a",
                    room: "I.32"
                },
                {
                    group: "an3",
                    name: "Seprenyi",
                    subject: "a",
                    room: "Szt.3"
                },
                {
                    group: "an4",
                    name: "Tóth",
                    subject: "a",
                    room: "R."
                }
            ],
            //Péntek-4
            [
                {
                    group: "szt",
                    name: "P.-Pásztor",
                    subject: "ny",
                    room: "I.30."
                },
                {
                    group: "tk",
                    name: "Tóth",
                    subject: "a",
                    room: "F.18"
                }
            ],
            //Péntek-6
            [
                {

                }
            ],
            //Péntek-6
            [
                {
                    group: "sp",
                    name: "Sum",
                    subject: "sp",
                    room: "Sp."
                },
                {
                    group: "ol",
                    name: "Gianelli",
                    subject: "ol",
                    room: "L."
                },
                {
                    group: "né1"
                },
                {
                    group: "né2",
                    name: "Sótiné",
                    subject: "né",
                    room: "N."
                },
                {
                    group: "fr",
                }
            ],
            //Péntek-7
            [
                {

                }
            ],
            //Péntek-8
            [
                {

                }
            ]
        ]
    ]