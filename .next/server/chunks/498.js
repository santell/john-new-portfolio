"use strict";
exports.id = 498;
exports.ids = [498];
exports.modules = {

/***/ 7821:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const CONSTANT = {
    leftImgSrc: "img/avatar.jpg",
    skills: [
        {
            name: "React",
            percent: 100
        },
        {
            name: "Node.js",
            percent: 100
        },
        {
            name: "Express",
            percent: 95
        },
        {
            name: "Laravel",
            percent: 90
        },
        {
            name: "Vue",
            percent: 80
        },
        {
            name: "Angular",
            percent: 80
        },
        {
            name: "Python",
            percent: 85
        },
        {
            name: ".Net Core",
            percent: 70
        },
        {
            name: "Web3",
            percent: 100
        },
        {
            name: "Solidity",
            percent: 95
        },
        {
            name: "Next.js",
            percent: 90
        },
        {
            name: "Spring Boot",
            percent: 70
        },
        {
            name: "MySQL",
            percent: 95
        },
        {
            name: "MongoDB",
            percent: 90
        },
        {
            name: "PostgreSQL",
            percent: 80
        }, 
    ]
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CONSTANT);


/***/ }),

/***/ 486:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ components_About)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./src/context/navContext.js
var navContext = __webpack_require__(6333);
// EXTERNAL MODULE: external "react-bootstrap"
var external_react_bootstrap_ = __webpack_require__(358);
// EXTERNAL MODULE: ./constants/index.js
var constants = __webpack_require__(7821);
;// CONCATENATED MODULE: ./src/components/SkillItem.js


const SkillItem = ({ name , percent  })=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "col-12 col-sm-6 col-md-4",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                className: "skill-text",
                children: name
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "chart-bar",
                children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                    className: "item-progress",
                    style: {
                        width: "100%"
                    }
                })
            })
        ]
    });
};
/* harmony default export */ const components_SkillItem = (SkillItem);

;// CONCATENATED MODULE: ./src/components/About.js






const About = ()=>{
    const { nav  } = (0,external_react_.useContext)(navContext/* default */.Z);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("section", {
        id: "about",
        className: `${nav === "about" ? "active" : ""}`,
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "container page-title text-center",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h2", {
                        className: "text-center",
                        children: [
                            "about ",
                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                children: "me"
                            })
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                        className: "title-head-subtitle",
                        children: "I am passionate about coding innovative web and AI applications, and I love what I do"
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "container infos",
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "row personal-info",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "col-xl-6 col-lg-6 col-md-12 col-sm-12",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "image-container",
                                children: /*#__PURE__*/ jsx_runtime_.jsx(external_react_bootstrap_.Image, {
                                    className: "img-fluid d-block",
                                    src: "img/dark-about.jpg",
                                    alt: ""
                                })
                            })
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "row col-xl-6 col-lg-6 col-md-12",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "col-xl-6 col-lg-6 col-md-6 col-sm-6",
                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                        className: "list-1",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h6", {
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                            className: "font-weight-600",
                                                            children: "First Name"
                                                        }),
                                                        "John"
                                                    ]
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h6", {
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                            className: "font-weight-600",
                                                            children: "Last Name"
                                                        }),
                                                        "Pope"
                                                    ]
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h6", {
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                            className: "font-weight-600",
                                                            children: "Birthdate"
                                                        }),
                                                        "2 Oct 1994"
                                                    ]
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h6", {
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                            className: "font-weight-600",
                                                            children: "Nationality"
                                                        }),
                                                        "United State"
                                                    ]
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h6", {
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                            className: "font-weight-600",
                                                            children: "Experience"
                                                        }),
                                                        "8 years"
                                                    ]
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h6", {
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                            className: "font-weight-600",
                                                            children: "Address"
                                                        }),
                                                        "New Kensington, PA"
                                                    ]
                                                })
                                            })
                                        ]
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "col-xl-6 col-lg-6 col-md-6 col-sm-6",
                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                        className: "list-2",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h6", {
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                            className: "font-weight-600",
                                                            children: "Freelance"
                                                        }),
                                                        "Available"
                                                    ]
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h6", {
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                            className: "font-weight-600",
                                                            children: "Languages"
                                                        }),
                                                        "English"
                                                    ]
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h6", {
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                            className: "font-weight-600",
                                                            children: "Phone"
                                                        }),
                                                        "+1 631 392 6899"
                                                    ]
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h6", {
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                            className: "font-weight-600",
                                                            children: "Email"
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                            children: "Justintouchstone29@gmail.com"
                                                        })
                                                    ]
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h6", {
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                            className: "font-weight-600",
                                                            children: "Github"
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                            href: "https://github.com/santell",
                                                            children: "santell"
                                                        })
                                                    ]
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h6", {
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                            className: "font-weight-600",
                                                            children: "Telegram"
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                            href: "https://t.me/kkdragondev1008",
                                                            children: "Dragon Dev"
                                                        })
                                                    ]
                                                })
                                            })
                                        ]
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "col-12 resume-btn-container",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                        href: "john.pdf",
                                        download: true,
                                        className: "btn btn-resume",
                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                    className: "fa fa-download"
                                                }),
                                                "download my cv"
                                            ]
                                        })
                                    })
                                })
                            ]
                        })
                    ]
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "container col-12 mx-auto text-center",
                children: /*#__PURE__*/ jsx_runtime_.jsx("hr", {
                    className: "about-section"
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "resume-container",
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "container",
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "row",
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "col-xl-12 col-lg-12 col-md-12",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                                            className: "font-weight-600 uppercase title-section",
                                            children: "experience"
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            className: "resume-items",
                                            children: [
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                    className: "item",
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                            className: "bullet"
                                                        }),
                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                            className: "card",
                                                            children: [
                                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                                    className: "card-header",
                                                                    children: [
                                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                                                                            className: "year",
                                                                            children: [
                                                                                /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                                    className: "fa fa-calendar"
                                                                                }),
                                                                                /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                                    className: "fa fa-caret-right"
                                                                                }),
                                                                                "JAN 2022 \u2013 MAR 2023"
                                                                            ]
                                                                        }),
                                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                                                                            className: "d-block font-weight-400 uppercase",
                                                                            children: [
                                                                                "SENIOR FULL STACK DEVELOPER",
                                                                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                                    className: "separator"
                                                                                }),
                                                                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                                    className: "font-weight-700",
                                                                                    children: "UNSCHOOLER | REMOTE"
                                                                                })
                                                                            ]
                                                                        })
                                                                    ]
                                                                }),
                                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                                    className: "card-body",
                                                                    children: [
                                                                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                                            children: "\u2022 Structured the store and added thunk middlewares for APIs using Reduxjs toolkit for a better performance and code optimization."
                                                                        }),
                                                                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                                            children: "\u2022 Built the forecast dashboard for an AI platform with Angular, angular-data-grid, integrated 3rd party services including GA and Mixpanel"
                                                                        }),
                                                                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                                            children: "\u2022 Served as the lead engineer and conducted code review and mentored other developers"
                                                                        }),
                                                                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                                            children: "\u2022Contributed to building e-commerce website by improving efficiency by 20% with GraphQL and Apollo."
                                                                        }),
                                                                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                                            children: "\u2022 Built and maintained software services and UI components with Angular, TypeScript, Microsoft Azure, RxJS and Django."
                                                                        }),
                                                                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                                            children: "\u2022 Participated in building an NFT marketplace with React, TypeScript, MUI and ethers.js."
                                                                        }),
                                                                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                                            children: "\u2022 Implemented new features including OAuth of an educational platform (React / Express / PostgreSQL / Firebase)"
                                                                        }),
                                                                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                                            children: "\u2022 Improved the performance of the market place by 30% leveraging optimization techniques and deployed it into AWS."
                                                                        }),
                                                                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                                            children: "\u2022 Created a mobile application to manage orders for patients using React Native."
                                                                        }),
                                                                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                                            children: "\u2022 Designed and implemented the auditing system of the company using Vue, TypeScript and Django."
                                                                        })
                                                                    ]
                                                                })
                                                            ]
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                    className: "item",
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                            className: "bullet"
                                                        }),
                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                            className: "card",
                                                            children: [
                                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                                    className: "card-header",
                                                                    children: [
                                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                                                                            className: "year",
                                                                            children: [
                                                                                /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                                    className: "fa fa-calendar"
                                                                                }),
                                                                                /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                                    className: "fa fa-caret-right"
                                                                                }),
                                                                                "MAR 2019 - DEC 2021"
                                                                            ]
                                                                        }),
                                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                                                                            className: "d-block font-weight-400 uppercase",
                                                                            children: [
                                                                                "BACKEND DEVELOPER",
                                                                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                                    className: "separator"
                                                                                }),
                                                                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                                    className: "font-weight-700",
                                                                                    children: "SCOPIC|US,REMOTE"
                                                                                })
                                                                            ]
                                                                        })
                                                                    ]
                                                                }),
                                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                                    className: "card-body",
                                                                    children: [
                                                                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                                            children: "\u2022 Developed a real time communication platform within the company (React / Express / MongoDB / EasyRTC / Bootstrap)."
                                                                        }),
                                                                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                                            children: "\u2022 Implemented the task board for a company using Laravel Livewire."
                                                                        }),
                                                                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                                            children: "\u2022 Created an automated documentation system using Vue and Element Plus."
                                                                        }),
                                                                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                                            children: "\u2022 Planned website development, converting mock-ups into usable web presence with HTML, JavaScript, Angular, React and Vue.js."
                                                                        }),
                                                                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                                            children: "\u2022 Collaborated with the external engineering and design team to integrate the APIs and build the UI."
                                                                        }),
                                                                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                                            children: "\u2022 Wrote unit and e2e tests for APIs, components and UI flow in several applications (Enzyme / Cypress / Jest)."
                                                                        }),
                                                                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                                            children: "\u2022 Designed and implemented API endpoints for the admin panel of the online learning site (Node / Express / REST)."
                                                                        }),
                                                                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                                            children: "\u2022 Participated in the team project for building customer-facing web applications and MVPs using React, PostgreSQL and Node.js."
                                                                        }),
                                                                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                                            children: "\u2022 Found bugs in the beta version and improved original mechanism to enhance search functionality (Laravel / Elastic Search)."
                                                                        }),
                                                                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                                            children: "\u2022 Translated designs into pixel perfect responsive UI by collaborating with the designer using React, TypeScript, Tailwind and MUI."
                                                                        })
                                                                    ]
                                                                })
                                                            ]
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                    className: "item",
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                            className: "bullet"
                                                        }),
                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                            className: "card",
                                                            children: [
                                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                                    className: "card-header",
                                                                    children: [
                                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                                                                            className: "year",
                                                                            children: [
                                                                                /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                                    className: "fa fa-calendar"
                                                                                }),
                                                                                /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                                    className: "fa fa-caret-right"
                                                                                }),
                                                                                "MAR 2017 \u2013 FEB 2019"
                                                                            ]
                                                                        }),
                                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                                                                            className: "d-block font-weight-400 uppercase",
                                                                            children: [
                                                                                "FRONT END WEB DEVELOPER",
                                                                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                                    className: "separator"
                                                                                }),
                                                                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                                    className: "font-weight-700",
                                                                                    children: "CLEVEROAD | TALLINN, ESTONIA"
                                                                                })
                                                                            ]
                                                                        })
                                                                    ]
                                                                }),
                                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                                    className: "card-body",
                                                                    children: [
                                                                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                                            children: "\u2022 Upgraded the legacy code and UI of the ERP system using React, Bootstrap and SASS."
                                                                        }),
                                                                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                                            children: "\u2022 Built the video browsing platform using Next.js and video streaming technology."
                                                                        }),
                                                                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                                            children: "\u2022 Involved in several team projects and got used to the agile methodology."
                                                                        }),
                                                                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                                            children: "\u2022 Built the admin system of the financial agency using MERN stack."
                                                                        }),
                                                                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                                            children: "\u2022 Performed website development for clients in diverse fields such as health care, education, fintech and so on."
                                                                        }),
                                                                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                                            children: "\u2022 Kept up-to-date with the latest technologies through learning, research and self-development."
                                                                        })
                                                                    ]
                                                                })
                                                            ]
                                                        })
                                                    ]
                                                })
                                            ]
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "col-xl-12 col-lg-12 col-md-12 skills-container",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                                            className: "font-weight-600 uppercase title-section ",
                                            style: {
                                                marginTop: "30px !important"
                                            },
                                            children: "Education"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: "resume-items",
                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                className: "item",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                        className: "bullet"
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                        className: "card",
                                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                            className: "card-header",
                                                            children: [
                                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                                                                    className: "year",
                                                                    children: [
                                                                        /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                            className: "fa fa-calendar"
                                                                        }),
                                                                        /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                            className: "fa fa-caret-right"
                                                                        }),
                                                                        "2012 - 2017"
                                                                    ]
                                                                }),
                                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                                                                    className: "d-block font-weight-400 uppercase",
                                                                    children: [
                                                                        "BS IN COMPUTER SCIENCE",
                                                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                            className: "separator"
                                                                        }),
                                                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                            className: "font-weight-700",
                                                                            children: "Pennsylvania College of Technology"
                                                                        }),
                                                                        /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                                                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                            style: {
                                                                                fontSize: "12px"
                                                                            },
                                                                            children: " Williamsport, Pennsylvania, US"
                                                                        })
                                                                    ]
                                                                })
                                                            ]
                                                        })
                                                    })
                                                ]
                                            })
                                        })
                                    ]
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "row",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "col-12",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                                        className: "font-weight-600 uppercase title-section skills-title",
                                        children: "skills"
                                    })
                                }),
                                constants/* default.skills.map */.Z.skills.map((item, index)=>/*#__PURE__*/ jsx_runtime_.jsx(components_SkillItem, {
                                        name: item.name,
                                        percent: item.percent
                                    }, index))
                            ]
                        })
                    ]
                })
            })
        ]
    });
};
/* harmony default export */ const components_About = (About);


/***/ }),

/***/ 314:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ components_Blog)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./src/context/navContext.js
var navContext = __webpack_require__(6333);
;// CONCATENATED MODULE: ./src/components/BlogPopup.js

const BlogPopup = ({ open , close , data  })=>{
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: "modal__container",
        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
            className: `istambul_tm_modalbox ${open ? "opened" : ""}`,
            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "box_inner",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "close",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                            href: "#",
                            onClick: ()=>close(),
                            children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                className: "fa fa-times"
                            })
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "description_wrap",
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "news_popup_details",
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "top_image",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                            src: "img/4-2.jpg",
                                            alt: ""
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: "main",
                                            "data-img-url": data && data.img,
                                            style: {
                                                backgroundImage: `url(${data && data.img})`
                                            }
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "news_main_title",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                            children: data && data.title ? data.title : "title"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                href: "#",
                                                children: data && data.tag
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {})
                                    ]
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "text",
                                    children: data && data.des && data.des.map((des, i)=>des.includes("<span>") ? /*#__PURE__*/ jsx_runtime_.jsx("h6", {
                                            children: des.replace("<span>", "")
                                        }, i) : /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                            children: des
                                        }, i))
                                })
                            ]
                        })
                    })
                ]
            })
        })
    });
};
/* harmony default export */ const components_BlogPopup = (BlogPopup);

;// CONCATENATED MODULE: ./src/components/Blog.js




const data = [
    {
        title: "When AI and Blockchain Merge, Expect the Mundane at First",
        img: "img/blog/blog-post-1.jpg",
        tag: "Branding",
        date: {
            date: "23",
            month: "May",
            year: "2023"
        },
        des: [
            "Everybody wants to know how blockchain and generative-AI technologies will come together, so allow me to speculate.     ",
            "From family dinners to weekend afternoons, I`ve spent a lot of time in the last six months playing around with generative-AI tools and thinking about how they will change \u201Ceverything.\u201D",
            " I\u2019m more and more certain that they will have an impact, but it won\u2019t be as enormous or as fast as some might think, particularly in the enterprise.     ",
            "Let me start with all the reasons why generative AI is going to take a while to really achieve scale in enterprise business processes and have a measurable impact on productivity.",
            " First and foremost, enterprises achieve scale by implementing process controls and then automating systems.",
            "From inventory management to hiring, the key to scaling enterprise systems is the ability to move people\u2019s work efforts from individual transactions or activities to management of end-to-end processes.",
            "<span> Paul Brody is EY`s global blockchain leader and a CoinDesk columnist.",
            "Take something simple like stocking a grocery store with food. Enterprise systems and retail point-of-sale (POS) systems have been carefully integrated over the years to automatically reorder out-of-stock items and, much more importantly, forecast and plan systematically to avoid ever being out of stock.",
            "Generative-AI systems, by contrast, are not good at rigorously and consistently executing the same task over and over again with high precision. Ask a generative-AI system similar but not identical questions and you may get wildly different answers.",
            "This kind of variance breaks business processes built on input consistency.",
            "Generative-AI systems are terrific at coming up with new ideas, and doing so at enormous speed, but business transformation is largely about change management \u2013 both people and systems.",
            "Enterprise ecosystems tend to transform at about the same rate as the slowest components in the ecosystem, not the fastest ones. ",
            "A great example of this comes from the early era of web commerce. It was quickly possible to build web-based store fronts and accept credit-card payments. However, shipping and packaging was built and optimized for a world of pallet-sized deliveries to shops.",
            " To the extent that companies even had digital catalogs, they didn\u2019t have pictures of products. No supervisor of a grocery store needs to know what a can of soup looks like. They already know. ",
            "They\u2019re in the store every day. As a result, e-commerce took off much more slowly than analysts expected, held back not by the web, but by warehouses and logistics systems.      Like e-commerce, generative-AI systems will infiltrate enterprise systems alongside blockchain technology and they will eventually work very well together, but the progress will be driven by careful design and integration, not rapid, wholesale adoption. While consumers are often capable of adopting new technologies broadly in about a decade, it typically takes enterprise about 25 years and we should probably expect the same with generative AI and its integration with blockchain technology.",
            "<span>A look on the bright side",
            "Having gotten the bad news out of the way, let me focus on the areas where we will see the most dramatic impact of how these two technologies will work together.",
            " I\u2019ve identified four that might come sooner rather than later.",
            "<span>Software development",
            "Enterprise business processes are run on software, and generative AI systems are exceptionally good at software development. It is one of the few areas where we have strong, documented evidence that generative AI systems significantly improve productivity. Since integrating blockchains into enterprise processes is very much a matter of both process and software integration, the likely impact will be significant and felt soonest.     ",
            "<span> Analytics",
            "Blockchains do an amazing job of improving data quality. When you think about products, services, and systems that move between enterprises, one of the biggest casualties of inter-company work is data quality. In a world of silos, data is re-entered in each enterprise ecosystem. On a blockchain, tokens and hashes represent assets and data and can maintain their integrity as they move through an ecosystem. With better-quality data, expect generative-AI systems to do even better analysis.      It will also work the other way around: generative-AI systems are terrific at matching and interpreting patterns. They will become foundational to the business of blockchain analytics in a very short order, helping identify trends and classifying individual transactions.     ",
            "<span> Generative AI-training data",
            "One of the biggest emerging problems for AI systems is how to find trustworthy source data. We\u2019re in the early stages of an exa-flood of AI-generated content. Much of it will be banal, generic and mediocre. How will we know what is an authoritative, expert view on a topic or a machine-generated pattern based on other machine-generated patterns? By verifying authenticity and origin of source data using blockchain hashes.      The ANSA news agency in Italy already notarizes nearly 1 million articles a year using EY\u2019s OpsChain system. This was intended to combat fake news, but in the future, tools like this may be critical for authenticating the sources of AI-training data.    ",
            "<span>  User interfaces",
            "In the same way that generative-AI systems are great at writing code, they are also good at interpreting error messages, problems and suggesting solutions. Blockchain usage is still too complex and conversational interfaces that are able to accept error messages, search for, and format suggestions and work as a \u201Cco-pilot\u201D in a process are likely to be enormously helpful to users.In the early days as new technologies evolve and interact, the results tend to be both boring and predictable, much as I have described above. We saw this with GPS and Web commerce and mobile phones. At first, we had an e-commerce experience that was little more than a paper catalog on a screen. Eventually, we ended up with push-ads coming to us in a ride-sharing vehicle proposing to have food delivered to us at our destination.      And so it will be here, as blockchain and AI start to evolve and converge together. We\u2019re in the boring phase, but just wait until things get weird and wildly unpredictable. Because they will.", 
        ]
    },
    {
        title: "Tips For The Often Distracted Developer",
        img: "img/blog/blog-post-2.jpg",
        tag: "Life",
        date: {
            date: "12",
            month: "Apr",
            year: "2023"
        },
        des: [
            "Office environments can easily turn into an attention battlefield. Emails, slack notifications, calendar alerts, meetings and casual hallway chats are just a few of the interruptions knowledge workers experience on a daily basis. Followed by frequent context switching and multitasking, these interruptions have negative implications on our brain\u2019s performance. ",
            "<span>When distractions are everywhere focus becomes scarce",
            "As described in the highly recommended read\u200A\u2014\u200ADeep Work by Cal Newport, deep work is the ability to focus without distraction on a cognitively demanding task. It\u2019s an important skill that you can start to sharpen once you identify and eliminate the origins of your distractions.      If you read my previous post on communicating tech debt you could tell I\u2019m keen about improving productivity. I\u2019m constantly looking for ways to make my team\u2019s work as smooth as possible. So as such, I\u2019ve gathered a few tips throughout my career as a software developer and later on as a team lead. Tips that might help you get more deep & meaningful work done.I\u2019ve organized those tips based on their origin under 3 groups:",
            "\u2022 Schedule & time management.",
            "\u2022 Communication tools & rules",
            "\u2022 Work culture & environment",
            "<span>Schedule & time management",
            "\u2022 Time management is an art that involves planing & discipline. When done right it can also become a statement: \u201CI don\u2019t require micro-management, I\u2019m fully capable of managing my own time according to the given priorities\u201D. The next few tips aim to help you achieve this state.",
            "\u2022 Deep work intervals\u200A\u2014\u200Asplit the day to intervals of deep and shallow work and set a timer which reminds you to swap between them. I found that a 75 minutes to 15 minutes ratio, respectively, works great for me.",
            "\u2022 Schedule your deep work periods as calendar events. make sure you reserve at least 4 hours of deep work a day. Write a polite event description such as: \u201CI\u2019m in a deep work state. Please do not interrupt me unless it\u2019s urgent.\u201D",
            "\u2022 Meeting-free morning\u200A\u2014\u200Alate morning (10am until noon) is usually when our brain and energy levels are at their peak. Clear your morning from meetings and dedicate those peaks to get meaningful work done.",
            "\u2022 Plan your day ahead to eliminate friction and allocate focus periods. Consider adopting a \u201Cworkday shutdown\u201D ritual when you take the last 15 minutes of your workday to plan the following day.",
            "<span>Communications tools and rules",
            "<span>From PUSH to PULL\u200A\u2014\u200AChange how you consume communication!",
            "Your email, slack, calendar and phone constantly push notifications and alerts that beg for your immediate attention. You\u2019re often tempted to leave all you\u2019re doing and check them out thinking you might be missing something important or urgent. If you can identify with this behaviour then the next few tips can help you regain control of your time taken by the tools.",
            "\u2022 Disable all desktop notifications\u200A\u2014\u200Athe goal is to keep all the communication tools contained in the browser.",
            "\u2022 Prefer web clients/websites over native clients/apps versions of your communication tools. This way you can organize all those tabs inside one browser window and easily ignore or minimize it while in focus.",
            "\u2022 Use Slack \u201Cdo not disturb\u201D mode before diving deep into a complex task.",
            "\u2022 Silence your phone and disable any notification lights or screen flashes.",
            "\u2022 Need a mental break from your task? Now would be a good time to quickly overview your minimized browser window. However, do not respond to interactions unless it\u2019s important enough, or you\u2019ll risk losing the context of the task you\u2019re working on.",
            "<span>Work culture & environment",
            "Colleagues and managers can behave in a focus insensitive manner with either loud shared space conversations or badly timed questions. Your work setting can also be saturated with distractions that can easily be avoided. The next few tips can help you communicate the importance of focus to your surrounding and optimize your environment.",
            "\u2022 Headphones\u200A\u2014\u200Awearing noticeable headphones is the universal sign of being in the zone. Active noise canceling headphones will give you the freedom to just mute the world.",
            "\u2022 The Gateway Keeper\u200A\u2014\u200Aif you\u2019re a team manager, make sure employees outside your team contact you and not your teammates directly. This way you can delegate the communication at the right time and according to the right priority.",
            "\u2022 Static background\u200A\u2014\u200Asitting facing towards a view with lots of moving people or objects can irritate your brain while in focus. Avoid sitting in front of hallways, meeting rooms or kitchens.",
            "\u2022 Get comfortable\u200A\u2014\u200Acheck that your seat is adjusted for long sitting periods, your table is at the right height, get pads for your mouse and keyboard, even consider leaving a pair of comfortable shoes or flip flops in your office.",
            "\u2022 About to dive deep into a task? Make sure that you\u2019re well fed and won\u2019t need the toilet soon. keep a full cup or bottle at reach.",
            "Focus is crucial for solving complex issues, inventing creative solutions and delivering valuable work. However, it gets harder to maintain focus as technology, together with culture, keep filling our environment with distractions and stimulations.Deep work is beneficial for your personal development, as well as work satisfaction and so it\u2019s something any developer, or other knowledge worker should pursue.", 
        ]
    },
    {
        title: "How to Become a Successful Freelancer (1)",
        img: "img/blog/blog-post-3.jpg",
        tag: "Media",
        date: {
            date: "15",
            month: "Mar",
            year: "2021"
        },
        des: [
            "So you\u2019re reading this because you want to become a freelancer. You\u2019ve thought about what you want to freelance in, you\u2019ve got a couple of useful email addresses and you\u2019ve even bought yourself some sweatpants that will look great with your slippers.",
            "So you\u2019re ready to dump that job and get cracking on your first assignment, right?.",
            "Wrong.      One of the biggest misconceptions about freelancing is that you sit at home and work comes to you. When the reality is you have to fight for it, and fight hard.",
            "As our friend Leif Kendall aptly put it:      \u201CFirst: you must strive. Nothing good is ever easy.\u201D  I hate to break it to you, but working freelance means working. And I mean really working. Unlike your 9-5 cubicle, there is nothing cushy about freelancing, nothing stable about it until YOU have made it that way.",
            "But there are some simple secrets to becoming a successful freelancer which I am going to share with you in this blog post. Here they are in brief\u2014feel free to select one to jump straight to it, or read on for the full story.",
            "1 . Contact everyone you know.",
            "2 . Work on your personal brand.",
            "2 . Write a plan of action.",
            "4 . Do your research and pay attention to competition.",
            "5 . Get yourself a mentor\u2014and your first client.",
            "Using these steps\u2014and a bit of determination\u2014I\u2019ve seen people get out of their desk jobs and start working comfortably for themselves in 30 days.    If they can do it, so can you. As Leif told it:            \u201CYour first few days, weeks and months are probably going to be challenging, and likely to take everything you\u2019ve got.\u201D         So what did I do when I first went freelance?  Let\u2019s be clear here, because what I did\u2014what made me successful\u2014was done BEFORE I went freelance, not after. Granted, my path to the flexible profession was abnormal. Having decided in college that \u201Cnormal jobs\u201D weren\u2019t my thing, I used time in between studying and a karaoke bar job to set myself up.",
            "But when you read how I made the transition, you\u2019ll realise that if you have any experience in your field at all, you\u2019ve got it easier than I did. Just always remember that becoming a successful freelancer doesn\u2019t begin the day you quit your job, but the day you decide it\u2019s the lifestyle for you.",
            "In between deciding to become a freelancer and becoming a freelancer, you need to prepare to be a freelancer.  So how did I do that?",
            "<span>1. I contacted everyone I have ever known",
            "Literally. Everyone.",
            "The very first thing I did when deciding to make the switch was to get in touch with every single person I have ever known and told them my decision.      I told them the field I was going to be working in and as it became clear, even the date I was planning to leave my awful day job (in 30 days time).I also told them that I would be more than happy to take on projects straight away. If I was still studying, and working a job, why did I say I could take on projects? Wasn\u2019t I a bit busy already, studying/working 14+ hours a day and organizing myself to go freelance or to take on projects in my free time\u2019?The reason I told my friends and friends of friends, colleagues and ex-colleagues that I was willing to take on projects straight away was for three reasons:",
            "\u2022 Experience",
            "\u2022 Contacts",
            "\u2022 References",
            "And the earlier you send this email the better. Do it 30 days before you want to go freelance, or do it six months before. But the point is, don\u2019t leave people hanging.  Not only do you want to make your announcement actionable, but clients take time to develop. Don\u2019t put yourself in a position to do the work \u201Cin a month\u201D, when the discussion you need to start may take that much time anyway!  The more experience, contacts and references you have when you go freelance, the easier making that final break from your job will be.",
            "And when people asked me to do a job for them that they couldn\u2019t pay me for I would again consider:",
            "\u2022 Experience",
            "\u2022 Contacts",
            "\u2022 References",
            "If I was going to get just one of these things out of the arrangement then there was no way I was turning down that work, money or no money. If in doubt, remember the wise words of freelance expert Jon Norris,",
            "<span>\u201CBuilding a network and finding work are two sides of the same coin.\u201D",
            "Here I just want to include a note for those of you who have already started freelancing, as for you guys too I cannot emphasize the importance of this step enough. It\u2019s never too late to start reaching out to people and expanding your network.",
            "If you have work to show for your efforts already, your outreach will go much further, a reason why this step should be repeated annually even once you are a successful freelancer! Keep yourself fresh in people\u2019s minds and be their go-to person when they need a professional in your field.",
            "So after I\u2019d contacted my entire network, what did I do next?",
            "<span>2. I got to work on my personal brand",
            "So what does my personal brand have to do with anything? I\u2019m an experienced [insert profession here], not a social networker \u2013 why can\u2019t I just make an ad and put it online/buy a spot in the newspaper/stick it to a tree/leave under windshield-wipers in the parking lot?,", 
        ]
    },
    {
        title: "How to become a successful freelancer (2)",
        img: "img/blog/blog-post-4.jpg",
        tag: "Technology",
        date: {
            date: "11",
            month: "Feb",
            year: "2021"
        },
        des: [
            "The reason is that as a freelancer, YOU ARE YOUR BRAND.",
            "So help me god [or deity of choice], this is a truth among truths, irrespective of whether you\u2019re a web developer, a user experience designer, a writer or a marketer.",
            "What do I mean when I say you are your brand?",
            "I mean that when you are selling your services, you are actually selling yourself. So how you come across online or off is reflective of your success, your ability, and your professionalism. Your personality counts. Big time. If people don\u2019t like you, they won\u2019t buy what you\u2019re selling.",
            "So, how did I build my personal brand?",
            "1 .I got myself on LinkedIn and I fully filled out my profile. Every single detail of my experience. Every relevant job I ever had. Every morsel about me that could be interesting.",
            "2 .I then did the same thing on Facebook. I joined relevant groups for my field and started asking questions, lots of questions, as well as answering any I could. ",
            "3. I did the same on Twitter.",
            "4. And on Meetup.",
            "5. And when it was made available I did the same with Quora, which has become the fact-filled platform for experts.",
            "6. I then went to every industry-relevant event I could find, afford and get to, and hustled like a maniac\u2026",
            "If you\u2019re someone who still believes social media is the devil, you\u2019re in trouble, because it\u2019s never a single tactic that will get you anywhere, it\u2019s a combination of many intelligently coordinated pieces.",
            "Asking and answering questions is the easiest way to get people involved and invested in what you do, and while you could meet 15 people during a night out, you could meet 100 online. And perhaps yes, the contact is \u201Cshallower\u201D but you can be a hell of lot more targeted.",
            "So I recommend starting online, understanding who\u2019s important for you, pre-empting offline events by connecting with people via Twitter, and leveraging LinkedIn connections into meetings for coffee.",
            "If you combine a strong digital brand with meeting people in person, you\u2019ll make yourself:",
            "Easy to find",
            "Easy to remember",
            "Good to know",
            "You want to be understood as an expert and an influencer in your field, and in a world where most industry communication is digital, you better be all over it!",
            "Just remember not to get discouraged if you don\u2019t get 1000 Twitter followers instantly, because what\u2019s important here is that quality wins over quantity every time. Stay focused, stay targeted and talk to every new connection like they\u2019re your best friend.",
            "And vice versa, if you\u2019re awkward and depend entirely on social media to drive your network, you\u2019re doing it wrong. You have to get out, you have to meet people and confirm that you\u2019re real and worth investing in. As Jon Norris explained:",
            "\u201CAlthough it can be awkward attending networking events, it\u2019s a great way to build contacts. Get out there, hand out business cards and make friends.\u201D", 
        ]
    }, 
];
const Blog = ()=>{
    const { nav  } = (0,external_react_.useContext)(navContext/* default */.Z);
    const { 0: modal , 1: setModal  } = (0,external_react_.useState)(false);
    const { 0: activeData , 1: setActiveData  } = (0,external_react_.useState)({});
    const onClick = (value)=>{
        setModal(true);
        setActiveData(data[value]);
    };
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_react_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(components_BlogPopup, {
                open: modal,
                close: ()=>setModal(false),
                data: activeData
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("section", {
                id: "blog",
                className: `${nav === "blog" ? "active" : ""}`,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "container page-title text-center",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h2", {
                                className: "text-center",
                                children: [
                                    "latest ",
                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                        children: "posts"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                className: "title-head-subtitle",
                                children: "tips, insights, and best practices about web design and developpment"
                            })
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "container",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "row",
                            children: data.map((data, i)=>/*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "col-12 col-sm-6",
                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("article", {
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("figure", {
                                                className: "blog-figure",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                        href: "#",
                                                        onClick: ()=>onClick(i),
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                            className: "img-fluid",
                                                            src: data.img,
                                                            alt: ""
                                                        })
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                        className: "post-date",
                                                        children: [
                                                            " ",
                                                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                children: data.date.date
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                children: data.date.month
                                                            })
                                                        ]
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                href: "#",
                                                onClick: ()=>onClick(i),
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                                                    children: data.title
                                                })
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                className: "blog-excerpt",
                                                children: [
                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                                        children: [
                                                            data.des[0].substring(0, 92),
                                                            "... "
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                        href: "#",
                                                        onClick: ()=>onClick(i),
                                                        className: "btn readmore",
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                            children: "Read more"
                                                        })
                                                    })
                                                ]
                                            })
                                        ]
                                    })
                                }, i))
                        })
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const components_Blog = (Blog);


/***/ }),

/***/ 8504:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var emailjs_com__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8655);
/* harmony import */ var emailjs_com__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(emailjs_com__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _context_navContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6333);




const Contact = ()=>{
    const { nav  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useContext)(_context_navContext__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z);
    const { 0: mailData , 1: setMailData  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)({
        name: "",
        email: "",
        message: ""
    });
    const { name , email , message  } = mailData;
    const { 0: error , 1: setError  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null);
    const onChange = (e)=>setMailData({
            ...mailData,
            [e.target.name]: e.target.value
        });
    const onSubmit = (e)=>{
        e.preventDefault();
        if (name.length === 0 || email.length === 0 || message.length === 0) {
            setError(true);
            clearError();
        } else {
            emailjs_com__WEBPACK_IMPORTED_MODULE_1___default().send("service_15gkrol", "template_q9auskj", mailData, "FGTVSNv5aTlQf8RJ-" // public api
            ).then((response)=>{
                setError(false);
                clearError();
                setMailData({
                    name: "",
                    email: "",
                    message: ""
                });
            }, (err)=>{
                console.log(err.text);
            });
        }
    };
    const clearError = ()=>{
        setTimeout(()=>{
            setError(null);
        }, 2000);
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("section", {
        id: "contact",
        className: `${nav === "contact" ? "active" : ""}`,
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "contact-container",
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "container page-title text-center",
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h2", {
                            className: "text-center",
                            children: [
                                "get ",
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                    children: "in touch"
                                })
                            ]
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                            className: "title-head-subtitle",
                            children: "I\u2019m always open to discussing product design work or partnerships."
                        })
                    ]
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "container",
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "row contact",
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "col-12 col-md-4 col-xl-4 leftside",
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul", {
                                        className: "custom-list",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h6", {
                                                    className: "font-weight-600",
                                                    children: [
                                                        " ",
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                            className: "contact-title",
                                                            children: "Phone"
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                            className: "fa fa-whatsapp"
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                            className: "contact-content",
                                                            children: "+1 631 392 6899"
                                                        })
                                                    ]
                                                })
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h6", {
                                                    className: "font-weight-600",
                                                    children: [
                                                        " ",
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                            className: "contact-title",
                                                            children: "email"
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                            className: "fa fa-envelope-o fs-14"
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                            href: "mailto:stevenandrychuk481@gmail.com",
                                                            target: "_blank",
                                                            rel: "noreferrer",
                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                className: "contact-content",
                                                                children: "Justintouchstone29@gmail.com"
                                                            })
                                                        })
                                                    ]
                                                })
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h6", {
                                                    className: "font-weight-600",
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                            className: "contact-title",
                                                            children: "Telgram"
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                            className: "fa fa-telegram"
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                            href: "https://t.me/kkdragondev1008",
                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                className: "contact-content",
                                                                children: "Dragon Dev"
                                                            })
                                                        })
                                                    ]
                                                })
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "social",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h6", {
                                                className: "font-weight-600 uppercase",
                                                children: "Social Profiles"
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul", {
                                                className: "list-inline social social-intro text-center p-none",
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                        className: "facebook",
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                            title: "Telegram",
                                                            href: "https://t.me/kkdragondev1008",
                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                                className: "fa fa-telegram"
                                                            })
                                                        })
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                        className: "github",
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                            title: "Github",
                                                            href: "https://github.com/santell",
                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                                className: "fa fa-github"
                                                            })
                                                        })
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                        className: "youtube",
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                            title: "Linkedin",
                                                            href: "#",
                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                                className: "fa fa-linkedin"
                                                            })
                                                        })
                                                    })
                                                ]
                                            })
                                        ]
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "col-12 col-md-8 col-xl-8 rightside",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                        children: "If you have any suggestion, project or even you want to say Hello.. please fill out the form below and I will reply you shortly."
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("form", {
                                        className: "contactform",
                                        onSubmit: (e)=>onSubmit(e),
                                        children: [
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: "row",
                                                children: [
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                        className: "form-group col-xl-6",
                                                        children: [
                                                            " ",
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                                className: "fa fa-user prefix"
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                                                id: "name",
                                                                name: "name",
                                                                onChange: (e)=>onChange(e),
                                                                value: name,
                                                                type: "text",
                                                                className: "form-control",
                                                                placeholder: "YOUR NAME",
                                                                required: ""
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                        className: "form-group col-xl-6",
                                                        children: [
                                                            " ",
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                                className: "fa fa-envelope prefix"
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                                                id: "email",
                                                                type: "email",
                                                                name: "email",
                                                                onChange: (e)=>onChange(e),
                                                                value: email,
                                                                className: "form-control",
                                                                placeholder: "YOUR EMAIL",
                                                                required: ""
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                        className: "form-group col-xl-12",
                                                        children: [
                                                            " ",
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                                className: "fa fa-comments prefix"
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("textarea", {
                                                                id: "comment",
                                                                name: "message",
                                                                onChange: (e)=>onChange(e),
                                                                value: message,
                                                                className: "form-control",
                                                                placeholder: "YOUR MESSAGE",
                                                                required: ""
                                                            }),
                                                            " "
                                                        ]
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "submit-form",
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                                    className: "btn button-animated",
                                                    type: "submit",
                                                    name: "send",
                                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                                        children: [
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                                className: "fa fa-send"
                                                            }),
                                                            " Send Message"
                                                        ]
                                                    })
                                                })
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: "form-message",
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                        className: error ? "empty_notice" : "returnmessage",
                                                        style: {
                                                            display: error == null ? "none" : "block"
                                                        },
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                            children: error ? "Please Fill Required Fields" : "Your message has been received, We will contact you soon."
                                                        })
                                                    }),
                                                    " ",
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                        className: "output_message text-center font-weight-600 uppercase"
                                                    })
                                                ]
                                            })
                                        ]
                                    })
                                ]
                            })
                        ]
                    })
                })
            ]
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Contact);


/***/ }),

/***/ 8732:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ components_Home)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./src/context/navContext.js
var navContext = __webpack_require__(6333);
// EXTERNAL MODULE: external "react-moving-text"
var external_react_moving_text_ = __webpack_require__(6977);
var external_react_moving_text_default = /*#__PURE__*/__webpack_require__.n(external_react_moving_text_);
;// CONCATENATED MODULE: ./src/components/AnimationText.js


const AnimationText = ()=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h1", {
        className: "ah-headline d-flex",
        children: [
            `I'm`,
            " ",
            /*#__PURE__*/ jsx_runtime_.jsx((external_react_moving_text_default()), {
                type: "typewriter",
                dataText: [
                    "John Pope",
                    "a Full-Stack expert",
                    "a Blockchain expert",
                    "a Freelancer"
                ]
            })
        ]
    });
};
/* harmony default export */ const components_AnimationText = (AnimationText);

;// CONCATENATED MODULE: ./src/components/Home.js




const Home = ({ leftImg , video , leftImgSrc  })=>{
    const { nav , changeNav  } = (0,external_react_.useContext)(navContext/* default */.Z);
    console.log({
        leftImg,
        leftImgSrc
    });
    return /*#__PURE__*/ jsx_runtime_.jsx("section", {
        id: "home",
        className: `${nav === "home" ? "active" : ""}`,
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: "main-text-container",
            children: [
                leftImg && /*#__PURE__*/ jsx_runtime_.jsx("img", {
                    className: "leftimagepicture",
                    src: `${leftImgSrc ? leftImgSrc : "img/leftimage-dark.jpg"}`,
                    alt: "avatar"
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "main-text",
                    id: "selector",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                            children: "Hi there !"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(components_AnimationText, {}),
                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                            children: "Experienced full stack and blockchain developer with a passion for innovation and problem-solving. Skilled in developing robust and scalable web applications using cutting-edge technologies such as React, Node.js, and Solidity. Proven track record of delivering high-quality projects on time and within budget. Specializes in decentralized applications, smart contracts, and e-commerce platforms. If you`re looking for a reliable and skilled developer to bring your ideas to life, look no further"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "call-to-actions-home",
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "text-left",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                        href: "#about",
                                        onClick: ()=>changeNav("about"),
                                        className: "btn link-portfolio-one",
                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                    className: "fa fa-user"
                                                }),
                                                "more about me"
                                            ]
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                        href: "#work",
                                        onClick: ()=>changeNav("work"),
                                        className: "btn btn-secondary link-portfolio-two",
                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                    className: "fa fa-suitcase"
                                                }),
                                                "portfolio"
                                            ]
                                        })
                                    })
                                ]
                            })
                        })
                    ]
                })
            ]
        })
    });
};
/* harmony default export */ const components_Home = (Home);


/***/ })

};
;