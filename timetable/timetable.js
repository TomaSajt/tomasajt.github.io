const days = ["Hétfő", "Kedd", "Szerda", "Csütörtök", "Péntek"]
const colorMap = {
    "mt": "lawngreen",
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
                null
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
                null
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
                null
            ],
            //Hétfő-8
            [
                null
            ]
        ],
        [
            //Kedd-0
            [
                null
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
                null
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
                null
            ],
            //Kedd-8
            [
                null
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
                null,
                null,
                null
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
                null
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
                null
            ],
            //Szerda-7
            [
                null
            ],
            //Szerda-8
            [
                null
            ]
        ],
        [
            //Csütörtök-0
            [
                null,
                null,
                {
                    group: "an3",
                    name: "Seprenyi",
                    subject: "a",
                    room: "II.41"
                },
                null
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
                null,
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
                null
            ],
            //Csütörtök-7
            [
                null
            ],
            //Csütörtök-8
            [
                null
            ]
        ],
        [
            //Péntek-0
            [
                null
            ],
            //Péntek-1
            [
                null
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
                null
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
                null,
                {
                    group: "né2",
                    name: "Sótiné",
                    subject: "né",
                    room: "N."
                },
                null
            ],
            //Péntek-7
            [
                null
            ],
            //Péntek-8
            [
                null
            ]
        ]
    ]