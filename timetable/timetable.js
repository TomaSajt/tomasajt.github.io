const days = ["Hétfõ", "Kedd", "Szerda", "Csütörtök", "Péntek"]
const colorMap = {
    //Lyukas óra
    0: "pink",

    //Közös óra
    1: "lightskyblue",

    //Inf-Tk óra
    2: "yellow",

    //Angol óra
    3: "lawngreen",

    //2. idegen nyelv óra
    4: "orange"
}
const nyf =
    [
        [
            //Hétfõ-0
            {
                type: 2,
                data: {
                    szt: {
                        name: "Darabánt",
                        class: "mt",
                        room: "I.30"
                    }
                }
            },
            //Hétfõ-1
            {
                type: 2,
                data: {
                    szt: {
                        name: "Krajnyák",
                        class: "inf",
                        room: "Szt.2"
                    },
                    tk: {
                        name: "Szabados",
                        class: "inf",
                        room: "Tk."
                    }
                }
            },
            //Hétfõ-2
            {
                type: 2,
                data: {
                    szt: {
                        name: "Krajnyák",
                        class: "inf",
                        room: "Szt.2"
                    },
                    tk: {
                        name: "Pók",
                        class: "inf",
                        room: "Tk."
                    }
                }
            },
            //Hétfõ-3
            {
                type: 4,
                data: {
                    ne1: {
                        name: "Halász",
                        class: "né",
                        room: "R."
                    },
                    ol: {
                        name: "Gianelli",
                        class: "ol",
                        room: "Ol.2"
                    },
                    ne2: {
                        name: "Sótiné",
                        class: "né",
                        room: "N."
                    },
                    sp: {
                        name: "Sum",
                        class: "sp",
                        room: "Sp."
                    },
                    fr: {
                        name: "Szabolcsi",
                        class: "fr",
                        room: "Fr."
                    }
                }
            },
            //Hétfõ-4
            {
                type: 0
            },
            //Hétfõ-5
            {
                type: 3,
                data: {
                    an2: {
                        name: "Hajba",
                        class: "a",
                        room: "Szt.3"
                    },
                    an3: {
                        name: "Seprenyi",
                        class: "a",
                        room: "II.41"
                    },
                    an4: {
                        name: "Tóth",
                        class: "a",
                        room: "A.3"
                    },
                    an1: {
                        name: "Varga Bo.",
                        class: "a",
                        room: "I.30"
                    }
                }
            },
            //Hétfõ-6
            {
                type: 3,
                data: {
                    an2: {
                        name: "Bertók",
                        class: "a",
                        room: "Szt.3"
                    },
                    an3: {
                        name: "Seprenyi",
                        class: "a",
                        room: "II.41"
                    },
                    an4: {
                        name: "Tóth",
                        class: "a",
                        room: "A.3"
                    },
                    an1: {
                        name: "Varga Bo.",
                        class: "a",
                        room: "I.30"
                    }
                }
            },
            //Hétfõ-7
            {
                type: 0
            },
            //Hétfõ-8
            {
                type: 0
            }
        ],
        [
            //Kedd-0
            {
                type: 0
            },
            //Kedd-1
            {
                type: 4,
                data: {
                    ne1: {
                        name: "Halász",
                        class: "né",
                        room: "N."
                    },
                    ol: {
                        name: "Gianelli",
                        class: "ol",
                        room: "Ol.1"
                    },
                    ne2: {
                        name: "Sótiné",
                        class: "né",
                        room: "A.1"
                    },
                    sp: {
                        name: "Sum",
                        class: "sp",
                        room: "Sp."
                    },
                    fr: {
                        name: "Szabolcsi",
                        class: "fr",
                        room: "Fr."
                    }
                }
            },
            //Kedd-2
            {
                type: 4,
                data: {
                    ne1: {
                        name: "Halász",
                        class: "né",
                        room: "N."
                    },
                    ol: {
                        name: "Gianelli",
                        class: "ol",
                        room: "Ol.1"
                    },
                    ne2: {
                        name: "Sótiné",
                        class: "né",
                        room: "A.1"
                    },
                    sp: {
                        name: "Sum",
                        class: "sp",
                        room: "Sp."
                    }
                }
            },
            //Kedd-3
            {
                type: 2,
                data: {
                    szt: {
                        name: "Tóth",
                        class: "a",
                        room: "F.10"
                    },
                    tk: {
                        name: "Krajnyák",
                        class: "mt",
                        room: "I.30"
                    }
                }
            },
            //Kedd-4
            {
                type: 2,
                data: {
                    szt: {
                        name: "Darabánt",
                        class: "mt",
                        room: "I.30"
                    },
                    tk: {
                        name: "Papp L",
                        class: "inf",
                        room: "Tk."
                    }
                }
            },
            //Kedd-5
            {
                type: 2,
                data: {
                    szt: {
                        name: "Krajnyák",
                        class: "inf",
                        room: "Szt.2"
                    },
                    tk: {
                        name: "Papp L",
                        class: "inf",
                        room: "Tk."
                    }
                }
            },
            //Kedd-6
            {
                type: 3,
                data: {
                    an2: {
                        name: "Bertók",
                        class: "a",
                        room: "A.2"
                    },
                    an4: {
                        name: "Juhász A.",
                        class: "a",
                        room: "A.3"
                    },
                    an3: {
                        name: "Seprenyi",
                        class: "a",
                        room: "II.41"
                    },
                    an1: {
                        name: "Varga Bo.",
                        class: "a",
                        room: "N."
                    }
                }
            },
            //Kedd-7
            {
                type: 0
            },
            //Kedd-8
            {
                type: 0
            }
        ],
        [
            //Szerda-0
            {
                type: 4,
                data: {
                    ol: {
                        name: "Gianelli",
                        class: "ol",
                        room: "Ol.1"
                    },
                    sp: {
                        name: "Sum",
                        class: "sp",
                        room: "Sp."
                    }
                }
            },
            //Szerda-1
            {
                type: 1,
                data: {
                    lesson: {
                        name: "Krajnyák",
                        class: "of",
                        room: "I.30"
                    }
                }
            },
            //Szerda-2
            {
                type: 3,
                data: {
                    an2: {
                        name: "Bertók",
                        class: "a",
                        room: "A.1"
                    },
                    an4: {
                        name: "Hajba",
                        class: "a",
                        room: "Szt.3"
                    },
                    an3: {
                        name: "Seprenyi",
                        class: "a",
                        room: "A.2"
                    },
                    an1: {
                        name: "Varga Bo.",
                        class: "a",
                        room: "I.30"
                    }
                }
            },
            //Szerda-3
            {
                type: 3,
                data: {
                    an2: {
                        name: "Huszár",
                        class: "a",
                        room: "I.30"
                    },
                    an3: {
                        name: "Seprenyi",
                        class: "a",
                        room: "A.2"
                    },
                    an4: {
                        name: "Tóth",
                        class: "a",
                        room: "F.18"
                    },
                    an1: {
                        name: "Varga Bo.",
                        class: "a",
                        room: "A.1"
                    }
                }
            },
            //Szerda-4
            {
                type: 0
            },
            //Szerda-5
            {
                type: 2,
                data: {
                    szt: {
                        name: "P.-Pásztor",
                        class: "i",
                        room: "I.39."
                    },
                    tk: {
                        name: "Krajnyák",
                        class: "mt",
                        room: "T.2"
                    }
                }
            },
            //Szerda-6
            {
                type: 0
            },
            //Szerda-7
            {
                type: 0
            },
            //Szerda-8
            {
                type: 0
            }
        ],
        [
            //Csütörtök-0
            {
                type: 3,
                data: {
                    an3: {
                        name: "Seprenyi",
                        class: "a",
                        room: "II.41"
                    }
                }
            },
            //Csütörtök-1
            {
                type: 3,
                data: {
                    an2: {
                        name: "Huszár",
                        class: "a",
                        room: "A.2"
                    },
                    an3: {
                        name: "Seprenyi",
                        class: "a",
                        room: "II.41"
                    },
                    an4: {
                        name: "Tóth",
                        class: "a",
                        room: "I.30"
                    },
                    an1: {
                        name: "Varga Bo.",
                        class: "a",
                        room: "F.8"
                    }
                }
            },
            //Csütörtök-2
            {
                type: 4,
                data: {
                    ne1: {
                        name: "Halász",
                        class: "né",
                        room: "Szt.3"
                    },
                    ol: {
                        name: "Gianelli",
                        class: "ol",
                        room: "F.9"
                    },
                    ne2: {
                        name: "Sótiné",
                        class: "né",
                        room: "II.51"
                    },
                    sp: {
                        name: "Sum",
                        class: "sp",
                        room: "D."
                    },
                    fr: {
                        name: "Szabolcsi",
                        class: "fr",
                        room: "II.42"
                    }
                }
            },
            //Csütörtök-3
            {
                type: 2,
                data: {
                    szt: {
                        name: "Krajnyák",
                        class: "inf",
                        room: "Szt.1"
                    },
                    tk: {
                        name: "P.-Pásztor",
                        class: "ny",
                        room: "I.30"
                    }
                }
            },
            //Csütörtök-4
            {
                type: 2,
                data: {
                    szt: {
                        name: "Darabánt",
                        class: "mt",
                        room: "M."
                    },
                    tk: {
                        name: "Krajnyák",
                        class: "mt",
                        room: "T.2"
                    }
                }
            },
            //Csütörtök-5
            {
                type: 2,
                data: {
                    tk: {
                        name: "Papp L.",
                        class: "inf",
                        room: "Tk."
                    }
                }
            },
            //Csütörtök-6
            {
                type: 0
            },
            //Csütörtök-7
            {
                type: 0
            },
            //Csütörtök-8
            {
                type: 0
            }
        ],
        [
            //Péntek-0
            {
                type: 0
            },
            //Péntek-1
            {
                type: 0
            },
            //Péntek-2
            {
                type: 3,
                data: {
                    an2: {
                        name: "Huszár",
                        class: "a",
                        room: "I.32"
                    },
                    an3: {
                        name: "Seprenyi",
                        class: "a",
                        room: "Szt.3"
                    },
                    an4: {
                        name: "Tóth",
                        class: "a",
                        room: "R."
                    },
                    an1: {
                        name: "Varga Bo.",
                        class: "a",
                        room: "I.30"
                    }
                }
            },
            //Péntek-2
            {
                type: 3,
                data: {
                    an2: {
                        name: "Huszár",
                        class: "a",
                        room: "I.32"
                    },
                    an3: {
                        name: "Seprenyi",
                        class: "a",
                        room: "Szt.3"
                    },
                    an4: {
                        name: "Tóth",
                        class: "a",
                        room: "R."
                    },
                    an1: {
                        name: "Varga Bo.",
                        class: "a",
                        room: "I.30"
                    }
                }
            },
            //Péntek-4
            {
                type: 2,
                data: {
                    szt: {
                        name: "P.-Pásztor",
                        class: "ny",
                        room: "I.30."
                    },
                    tk: {
                        name: "Tóth",
                        class: "a",
                        room: "F.18"
                    }
                }
            },
            //Péntek-6
            {
                type: 0
            },
            //Péntek-6
            {
                type: 4,
                data: {
                    ol: {
                        name: "Gianelli",
                        class: "ol",
                        room: "L."
                    },
                    ne2: {
                        name: "Sótiné",
                        class: "né",
                        room: "N."
                    },
                    sp: {
                        name: "Sum",
                        class: "sp",
                        room: "Sp."
                    }
                }
            },
            //Péntek-7
            {
                type: 0
            },
            //Péntek-8
            {
                type: 0
            }
        ]
    ]