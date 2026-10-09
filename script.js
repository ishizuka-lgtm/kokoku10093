// Define study
const study = lab.util.fromObject({
  "title": "root",
  "type": "lab.flow.Sequence",
  "parameters": {},
  "plugins": [
    {
      "type": "lab.plugins.Metadata",
      "path": undefined
    }
  ],
  "metadata": {
    "title": "",
    "description": "",
    "repository": "",
    "contributors": ""
  },
  "files": {},
  "responses": {},
  "content": [
    {
      "type": "lab.html.Page",
      "items": [
        {
          "type": "text",
          "title": "本実験・調査について",
          "content": "本実験・調査への参加はあなたの任意によるものです。"
        },
        {
          "required": true,
          "type": "text",
          "title": "1．本実験・調査の目的",
          "content": "本実験・調査は、広告の効果について調べることを目的としています。"
        },
        {
          "required": true,
          "type": "text",
          "title": "2．本実験・調査の手続き",
          "content": "本実験・調査に参加していただく場合、いくつかの広告をご覧いただき、その後、広告についての質問に回答していただきます。実験・調査にかかる時間は、約5分程度です。"
        },
        {
          "required": true,
          "type": "text",
          "title": "3．潜在的なリスク・苦痛など",
          "content": "本実験・調査への参加によって生じる可能性のあるリスクや苦痛は、実験・調査中に生じる多少の疲労を除き、特にありません。また、参加者は、いつでも自由に実験・調査を中止することができます（「6．参加と中止」もご参照ください）。"
        },
        {
          "required": true,
          "type": "text",
          "title": "4．参加による利益",
          "content": "収集されたデータは、広告や人の認知・感情に関する研究に役立てられます。\nまた、実験・調査の最後に、ご自身のメールアドレスを記入していただいた方には、後日、Amazonギフトカード100円分を謝礼金としてメールでお送りします。(メールアドレスの記入は任意です。)"
        },
        {
          "required": true,
          "type": "text",
          "title": "5．匿名性の確保",
          "content": "本実験・調査によって得られた情報は法律による開示請求を除き、匿名性が維持されます。 匿名性は実験参加番号者の付与、統計的な解析によって保たれます。 収集されたデータは匿名化した上で、統計的な処理を行い、論文や発表で公表されます。（ご記入いただいたe-mailは、謝礼（Amazonギフトカード）の送付のみに使用され、それ以外の目的には使用しません。）"
        },
        {
          "required": true,
          "type": "text",
          "title": "6．参加と中止",
          "content": "本実験・調査への参加・不参加は、あなたの自由意思によって決定することができます。また、参加した場合でも、いつでも、いかなる理由でも、途中で実験・調査を中止することができます。\n\n実験・調査を途中で中止する場合は、「ESCキー」を押した後、ウィンドウを閉じてください。"
        },
        {
          "required": true,
          "type": "text",
          "title": "7．実験・調査実施者へのお問い合わせ",
          "content": "本実験・調査について質問がある場合は、実施者または実施責任者にお問い合わせください。"
        },
        {
          "required": true,
          "type": "checkbox",
          "label": "実験・調査への参加に同意いただけますか？同意いただける方はチェックをお願いします。同意いただけない方は，ESCを押した後，ウィンドウを閉じてください。",
          "options": [
            {
              "label": "上記の説明をよく読み，理解した上で，実験・調査への参加に同意します。",
              "coding": "informedConsent"
            }
          ],
          "name": "informed consent"
        }
      ],
      "scrollTop": true,
      "submitButtonText": "次へ→",
      "submitButtonPosition": "right",
      "files": {},
      "responses": {
        "": ""
      },
      "parameters": {},
      "messageHandlers": {
        "before:prepare": function anonymous(
) {
const digits = 10;
const participantID = this.random.range(10**digits, 10**(digits+1));
this.state.participantID = participantID;

// 価格条件（1=高価格, 2=中価格, 3=低価格）
this.state.priceCond = (participantID % 3) + 1;
this.state.price = ['高価格', '中価格', '低価格'][this.state.priceCond - 1];

// 商品条件（1=腕時計, 2=財布）
this.state.adCond = (Math.floor(participantID / 3) % 2) + 1;
this.state.adType = ['腕時計', '財布'][this.state.adCond - 1];

// 条件ラベル（例: FL = 財布・低価格 / WH = 腕時計・高価格）
this.state.prodCode  = ['W', 'F'][this.state.adCond - 1];
this.state.priceCode = ['H', 'M', 'L'][this.state.priceCond - 1];
this.state.cond = this.state.prodCode + this.state.priceCode;

}
      },
      "title": "informed consent"
    },
    {
      "type": "lab.html.Page",
      "items": [
        {
          "type": "text"
        },
        {
          "required": true,
          "type": "input",
          "label": "年齢",
          "attributes": {
            "type": "number",
            "max": "99"
          },
          "help": "年齢を半角数字で入力してください",
          "name": "Age"
        },
        {
          "required": true,
          "type": "radio",
          "label": "性別",
          "options": [
            {
              "label": "男",
              "coding": "1"
            },
            {
              "label": "女",
              "coding": "2"
            },
            {
              "label": "その他",
              "coding": "3"
            }
          ],
          "name": "gender"
        }
      ],
      "scrollTop": true,
      "submitButtonText": "次へ→",
      "submitButtonPosition": "right",
      "files": {},
      "responses": {
        "": ""
      },
      "parameters": {},
      "messageHandlers": {},
      "title": "information"
    },
    {
      "type": "lab.html.Page",
      "items": [
        {
          "type": "text",
          "title": "広告を見て質問にお答えください。広告のページは10秒後自動で切り替わります。",
          "content": ""
        }
      ],
      "scrollTop": true,
      "submitButtonText": "次へ→",
      "submitButtonPosition": "right",
      "files": {},
      "responses": {
        "": ""
      },
      "parameters": {},
      "messageHandlers": {},
      "title": "introduction"
    },
    {
      "type": "lab.flow.Sequence",
      "files": {},
      "responses": {
        "": ""
      },
      "parameters": {},
      "messageHandlers": {},
      "title": "high medium low Sequence",
      "content": [
        {
          "type": "lab.flow.Sequence",
          "files": {},
          "responses": {
            "": ""
          },
          "parameters": {},
          "messageHandlers": {},
          "title": "low all Sequence",
          "skip": "${this.state.priceCond != 3}",
          "content": [
            {
              "type": "lab.flow.Sequence",
              "files": {},
              "responses": {
                "": ""
              },
              "parameters": {},
              "messageHandlers": {},
              "title": "low random Sequence",
              "shuffle": true,
              "content": [
                {
                  "type": "lab.flow.Sequence",
                  "files": {},
                  "responses": {
                    "": ""
                  },
                  "parameters": {},
                  "messageHandlers": {},
                  "title": "Watch:human",
                  "content": [
                    {
                      "type": "lab.canvas.Screen",
                      "content": [
                        {
                          "type": "image",
                          "left": "0",
                          "top": "0",
                          "angle": 0,
                          "width": "400",
                          "height": "600",
                          "stroke": null,
                          "strokeWidth": 0,
                          "fill": "black",
                          "src": "${ this.files[\"udedokei teikakaku.jpg\"] }",
                          "autoScale": undefined
                        }
                      ],
                      "viewport": [
                        800,
                        600
                      ],
                      "files": {
                        "広告_腕時計_低価格.jpg": "embedded\u002Fc71290d56f5947c6d6fc004a3271b900e476d9dceba7110398e3a426651843e1.jpg",
                        "腕低い.jpg": "embedded\u002Fa7d272638c64f4b2b58a4638b95ce70647fa29929226b6e9c6adb03592dbcd73.jpg",
                        "udedokei teikakaku.jpg": "embedded\u002F95317ac54839e79ed28b70559375219270436f4d1e400888eb538d152834e5c7.jpg"
                      },
                      "responses": {
                        "": ""
                      },
                      "parameters": {},
                      "messageHandlers": {},
                      "title": "Watch:human",
                      "timeout": "10000"
                    },
                    {
                      "type": "lab.html.Page",
                      "items": [
                        {
                          "type": "text",
                          "content": ""
                        },
                        {
                          "required": true,
                          "type": "likert",
                          "items": [
                            {
                              "label": "この広告に好感が持てる",
                              "coding": "WL1"
                            },
                            {
                              "label": "この広告は印象に残る",
                              "coding": "WL2"
                            },
                            {
                              "label": "この広告には違和感がある",
                              "coding": "WL3"
                            },
                            {
                              "label": "この広告はAIによって生成されたものだと思う",
                              "coding": "WL4"
                            },
                            {
                              "label": "この広告の人物に好感が持てる",
                              "coding": "WL5"
                            },
                            {
                              "label": "この広告の人物は印象に残る",
                              "coding": "WL6"
                            },
                            {
                              "label": "この広告の人物には違和感がある",
                              "coding": "WL7"
                            },
                            {
                              "label": "この商品を購入したい",
                              "coding": "WL8"
                            },
                            {
                              "label": "この商品は魅力的だと思う",
                              "coding": "WL9"
                            },
                            {
                              "label": "この商品は品質が高そうだと思う",
                              "coding": "WL10"
                            },
                            {
                              "label": "この商品に興味を持った",
                              "coding": "WL11"
                            },
                            {
                              "label": "この広告の情報は信頼できると思う",
                              "coding": "WL12"
                            },
                            {
                              "label": "この広告を出しているブランドは信頼できると思う",
                              "coding": "WL13"
                            }
                          ],
                          "width": "5",
                          "anchors": [
                            "1",
                            "2",
                            "3",
                            "4",
                            "5"
                          ],
                          "label": "当てはまるものをお答えください。",
                          "help": "1=全くそう思わない、2=そう思わない、3=どちらとも言えない、4=そう思う、5=非常にそう思う",
                          "name": "WL"
                        }
                      ],
                      "scrollTop": true,
                      "submitButtonText": "次へ",
                      "submitButtonPosition": "right",
                      "files": {},
                      "responses": {
                        "": ""
                      },
                      "parameters": {},
                      "messageHandlers": {},
                      "title": "question(WL)"
                    }
                  ]
                },
                {
                  "type": "lab.flow.Sequence",
                  "files": {},
                  "responses": {
                    "": ""
                  },
                  "parameters": {},
                  "messageHandlers": {},
                  "title": "Wallet:human",
                  "content": [
                    {
                      "type": "lab.canvas.Screen",
                      "content": [
                        {
                          "type": "image",
                          "left": 0,
                          "top": 0,
                          "angle": 0,
                          "width": "400",
                          "height": "600",
                          "stroke": null,
                          "strokeWidth": 0,
                          "fill": "black",
                          "src": "${ this.files[\"saihu teikakaku.jpg\"] }"
                        }
                      ],
                      "viewport": [
                        800,
                        600
                      ],
                      "files": {
                        "広告_財布_低価格.jpg": "embedded\u002F514ae607e3d86d370299c68d44201dc1884d08ae830b9e0cbaa060f0b281afeb.jpg",
                        "財布ひく.jpg": "embedded\u002Fa4c06cfd107f54be8536d54db0b954f559a2c22bd86fee140b3a9ea642ce0efc.jpg",
                        "saihu teikakaku.jpg": "embedded\u002F30b1cc055bfbdb146ecef998c377a3a7f0b73a12bb03d566d71b1a85135216ab.jpg"
                      },
                      "responses": {
                        "": ""
                      },
                      "parameters": {},
                      "messageHandlers": {},
                      "title": "Wallet:human",
                      "timeout": "10000"
                    },
                    {
                      "type": "lab.html.Page",
                      "items": [
                        {
                          "type": "text",
                          "content": ""
                        },
                        {
                          "required": true,
                          "type": "likert",
                          "items": [
                            {
                              "label": "この広告に好感が持てる",
                              "coding": "FL1"
                            },
                            {
                              "label": "この広告は印象に残る",
                              "coding": "FL2"
                            },
                            {
                              "label": "この広告には違和感がある",
                              "coding": "FL3"
                            },
                            {
                              "label": "この広告はAIによって生成されたものだと思う",
                              "coding": "FL4"
                            },
                            {
                              "label": "この広告の人物に好感が持てる",
                              "coding": "FL5"
                            },
                            {
                              "label": "この広告の人物は印象に残る",
                              "coding": "FL6"
                            },
                            {
                              "label": "この広告の人物には違和感がある",
                              "coding": "FL7"
                            },
                            {
                              "label": "この商品を購入したい",
                              "coding": "FL8"
                            },
                            {
                              "label": "この商品は魅力的だと思う",
                              "coding": "FL9"
                            },
                            {
                              "label": "この商品は品質が高そうだと思う",
                              "coding": "FL10"
                            },
                            {
                              "label": "この商品に興味を持った",
                              "coding": "FL11"
                            },
                            {
                              "label": "この広告の情報は信頼できると思う",
                              "coding": "FL12"
                            },
                            {
                              "label": "この広告を出しているブランドは信頼できると思う",
                              "coding": "FL13"
                            }
                          ],
                          "width": "5",
                          "anchors": [
                            "1",
                            "2",
                            "3",
                            "4",
                            "5"
                          ],
                          "label": "当てはまるものをお答えください。",
                          "help": "1=全くそう思わない、2=そう思わない、3=どちらとも言えない、4=そう思う、5=非常にそう思う",
                          "name": "FL"
                        }
                      ],
                      "scrollTop": true,
                      "submitButtonText": "次へ",
                      "submitButtonPosition": "right",
                      "files": {},
                      "responses": {
                        "": ""
                      },
                      "parameters": {},
                      "messageHandlers": {},
                      "title": "question(FL)"
                    }
                  ]
                }
              ]
            },
            {
              "type": "lab.flow.Sequence",
              "files": {},
              "responses": {
                "": ""
              },
              "parameters": {},
              "messageHandlers": {},
              "title": "low error Sequence",
              "content": [
                {
                  "type": "lab.html.Page",
                  "items": [
                    {
                      "type": "text",
                      "title": "",
                      "content": "この実験は\n1「AIキャラクターが使用された広告は消費者の購買意欲を低下させること」\n2「価格帯が高くなるほど、AIキャラクター広告の購買意欲の低下が顕著になること」を検証するために行われました。\nこの実験の意図にどの程度気づいていたかを5段階で評価してください。"
                    },
                    {
                      "required": true,
                      "type": "radio",
                      "label": "実験目的１に　5=完全に気付いていた　・・・　１＝全く気付かなかった",
                      "options": [
                        {
                          "label": "5",
                          "coding": "kizukiA_L_5"
                        },
                        {
                          "label": "4",
                          "coding": "kizukiA_L_4"
                        },
                        {
                          "label": "3",
                          "coding": "kizukiA_L_3"
                        },
                        {
                          "label": "2",
                          "coding": "kizukiA_L_2"
                        },
                        {
                          "label": "1",
                          "coding": "kizukiA_L_1"
                        }
                      ],
                      "name": "kizukiA_L"
                    },
                    {
                      "required": true,
                      "type": "radio",
                      "label": "実験目的２に　5=完全に気付いていた　・・・　１＝全く気付かなかった",
                      "options": [
                        {
                          "label": "5",
                          "coding": "kizukiB_L_5"
                        },
                        {
                          "label": "4",
                          "coding": "kizukiB_L_4"
                        },
                        {
                          "label": "3",
                          "coding": "kizukiB_L_3"
                        },
                        {
                          "label": "2",
                          "coding": "kizukiB_L_2"
                        },
                        {
                          "label": "1",
                          "coding": "kizukiB_L_1"
                        }
                      ],
                      "name": "kizukiB_L"
                    }
                  ],
                  "scrollTop": true,
                  "submitButtonText": "次へ →",
                  "submitButtonPosition": "right",
                  "files": {},
                  "responses": {
                    "": ""
                  },
                  "parameters": {},
                  "messageHandlers": {},
                  "title": "kizuitetaka"
                },
                {
                  "type": "lab.html.Page",
                  "items": [
                    {
                      "type": "text",
                      "title": "",
                      "content": ""
                    },
                    {
                      "required": true,
                      "type": "radio",
                      "options": [
                        {
                          "label": "実験・調査の実施に支障のある大きな問題が生じた",
                          "coding": "BigTRO"
                        },
                        {
                          "label": "実験・調査の実施に支障のない程度の問題が生じた",
                          "coding": "SmalTRO"
                        },
                        {
                          "label": "実験・調査の実施に問題はなかった",
                          "coding": "NoTRO"
                        }
                      ],
                      "label": "実験・調査を実施する上でなにか問題はありませんでしたか？",
                      "help": "例えば、プログラムの誤動作、来客や電話などの妨害、説明が分からなかったなども「問題」としてお答えください。",
                      "name": "Problem_L"
                    },
                    {
                      "required": false,
                      "type": "textarea",
                      "label": "問題の内容",
                      "help": "「実験・調査の実施に支障のある大きな問題が生じた」または「実験・調査の実施に支障のない程度の問題が生じた」とご回答くださった方は、その内容を以下に記入してください。",
                      "name": "ErrorReport"
                    }
                  ],
                  "scrollTop": true,
                  "submitButtonText": "次へ→",
                  "submitButtonPosition": "right",
                  "files": {},
                  "responses": {
                    "": ""
                  },
                  "parameters": {},
                  "messageHandlers": {},
                  "title": "Error"
                },
                {
                  "type": "lab.html.Page",
                  "items": [
                    {
                      "type": "text",
                      "title": "データの除外を希望しますか？",
                      "content": "今回ご提供いただいたデータは、研究発表などの学術利用に活用させていただく予定です。何らかの理由（同意を撤回したい、問題があったので除外してほしいなど）でデータの除外を希望される方はお知らせください。"
                    },
                    {
                      "required": true,
                      "type": "radio",
                      "options": [
                        {
                          "label": "はい、データを除外してください",
                          "coding": "Nodata"
                        },
                        {
                          "label": "いいえ、データを除外する必要はありません",
                          "coding": "Usedata"
                        }
                      ],
                      "name": "Exdata_L"
                    }
                  ],
                  "scrollTop": true,
                  "submitButtonText": "次へ →",
                  "submitButtonPosition": "right",
                  "files": {},
                  "responses": {
                    "": ""
                  },
                  "parameters": {},
                  "messageHandlers": {},
                  "title": "Exclusion Data"
                },
                {
                  "type": "lab.html.Page",
                  "items": [
                    {
                      "type": "text",
                      "title": "メールアドレスのご記入",
                      "content": "差し支えなければemailを記入してください。　謝礼金を送金する際に利用します。"
                    },
                    {
                      "required": false,
                      "type": "input",
                      "label": "メールアドレス",
                      "attributes": {
                        "type": "email",
                        "placeholder": "example@example.com"
                      },
                      "help": "半角で入力してください",
                      "name": "Email_L"
                    }
                  ],
                  "scrollTop": true,
                  "submitButtonText": "次へ",
                  "submitButtonPosition": "right",
                  "files": {},
                  "responses": {
                    "": ""
                  },
                  "parameters": {},
                  "messageHandlers": {},
                  "title": "email"
                },
                {
                  "type": "lab.html.Page",
                  "items": [
                    {
                      "type": "text",
                      "title": "これで実験は終了です。「終わり」ボタンを押してください。ご協力ありがとうございました。"
                    }
                  ],
                  "scrollTop": true,
                  "submitButtonText": "終わり",
                  "submitButtonPosition": "right",
                  "files": {},
                  "responses": {
                    "": ""
                  },
                  "parameters": {},
                  "messageHandlers": {
                    "before:prepare": function anonymous(
) {
//check Tardy
//ファイル名をランダムIDにする
const participantID = this.random.uuid4()

//csvファイルで保存する場合
const filename = participantID + "_data.csv"
const data = study.internals.controller.datastore.exportCsv();

fetch("https://pipe.jspsych.org/api/data/", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    Accept: "*/*",
  },
  body: JSON.stringify({
    experimentID: "J72tTsCSmJow",
    filename: filename,
    data: data,
  }),
});

}
                  },
                  "title": "End",
                  "tardy": true
                }
              ]
            }
          ]
        },
        {
          "type": "lab.flow.Sequence",
          "files": {},
          "responses": {
            "": ""
          },
          "parameters": {},
          "messageHandlers": {},
          "title": "medium all Sequence",
          "skip": "${this.state.priceCond != 2}",
          "content": [
            {
              "type": "lab.flow.Sequence",
              "files": {},
              "responses": {
                "": ""
              },
              "parameters": {},
              "messageHandlers": {},
              "title": "medium random Sequence",
              "shuffle": true,
              "content": [
                {
                  "type": "lab.flow.Sequence",
                  "files": {},
                  "responses": {
                    "": ""
                  },
                  "parameters": {},
                  "messageHandlers": {},
                  "title": "Watch:human",
                  "content": [
                    {
                      "type": "lab.canvas.Screen",
                      "content": [
                        {
                          "type": "image",
                          "left": 0,
                          "top": 0,
                          "angle": 0,
                          "width": "400",
                          "height": "600",
                          "stroke": null,
                          "strokeWidth": 0,
                          "fill": "black",
                          "src": "${ this.files[\"udedokei tyukakaku.jpg\"] }"
                        }
                      ],
                      "viewport": [
                        800,
                        600
                      ],
                      "files": {
                        "広告_腕時計_中価格.jpg": "embedded\u002F2e4ab43dd670f999a6cd763fd1cc47f18fc82b51bae4b361f775bda3442ae1af.jpg",
                        "腕真ん中.jpg": "embedded\u002F492c3e6eb4aef912ec57762eb5371649da9dffb62dd203be485f726e77466708.jpg",
                        "udedokei tyukakaku.jpg": "embedded\u002F07de4e001d89b9458ded979c941a03ba9327b1a993bfc1bb3122d2ca6d37b4a7.jpg"
                      },
                      "responses": {
                        "": ""
                      },
                      "parameters": {},
                      "messageHandlers": {},
                      "title": "Watch:human",
                      "timeout": "10000"
                    },
                    {
                      "type": "lab.html.Page",
                      "items": [
                        {
                          "type": "text",
                          "content": ""
                        },
                        {
                          "required": true,
                          "type": "likert",
                          "items": [
                            {
                              "label": "この広告に好感が持てる",
                              "coding": "WM1"
                            },
                            {
                              "label": "この広告は印象に残る",
                              "coding": "WM2"
                            },
                            {
                              "label": "この広告には違和感がある",
                              "coding": "WM3"
                            },
                            {
                              "label": "この広告はAIによって生成されたものだと思う",
                              "coding": "WM4"
                            },
                            {
                              "label": "この広告の人物に好感が持てる",
                              "coding": "WM5"
                            },
                            {
                              "label": "この広告の人物は印象に残る",
                              "coding": "WM6"
                            },
                            {
                              "label": "この広告の人物には違和感がある",
                              "coding": "WM7"
                            },
                            {
                              "label": "この商品を購入したい",
                              "coding": "WM8"
                            },
                            {
                              "label": "この商品は魅力的だと思う",
                              "coding": "WM9"
                            },
                            {
                              "label": "この商品は品質が高そうだと思う",
                              "coding": "WM10"
                            },
                            {
                              "label": "この商品に興味を持った",
                              "coding": "WM11"
                            },
                            {
                              "label": "この広告の情報は信頼できると思う",
                              "coding": "WM12"
                            },
                            {
                              "label": "この広告を出しているブランドは信頼できると思う",
                              "coding": "WM13"
                            }
                          ],
                          "width": "5",
                          "anchors": [
                            "1",
                            "2",
                            "3",
                            "4",
                            "5"
                          ],
                          "label": "当てはまるものをお答えください。",
                          "help": "1=全くそう思わない、2=そう思わない、3=どちらとも言えない、4=そう思う、5=非常にそう思う",
                          "name": "WM"
                        }
                      ],
                      "scrollTop": true,
                      "submitButtonText": "次へ",
                      "submitButtonPosition": "right",
                      "files": {},
                      "responses": {
                        "": ""
                      },
                      "parameters": {},
                      "messageHandlers": {},
                      "title": "question(WM)"
                    }
                  ]
                },
                {
                  "type": "lab.flow.Sequence",
                  "files": {},
                  "responses": {
                    "": ""
                  },
                  "parameters": {},
                  "messageHandlers": {},
                  "title": "Wallet:human",
                  "content": [
                    {
                      "type": "lab.canvas.Screen",
                      "content": [
                        {
                          "type": "image",
                          "left": 0,
                          "top": 0,
                          "angle": 0,
                          "width": "400",
                          "height": "600",
                          "stroke": null,
                          "strokeWidth": 0,
                          "fill": "black",
                          "src": "${ this.files[\"saihu tyukakaku.jpg\"] }"
                        }
                      ],
                      "viewport": [
                        800,
                        600
                      ],
                      "files": {
                        "広告_財布_中価格.jpg": "embedded\u002Fa1e36ad3001582f1370226cf50acca70b6321492c7c9d3c4981b873c9d6be0a8.jpg",
                        "財布なか.jpg": "embedded\u002F932a721b62a6647172025249aa1ed52367b1a32a71e93a9a11f3cdf9d7cfe0dd.jpg",
                        "saihu tyukakaku.jpg": "embedded\u002F04043bceded4b9c28d24a590c175baf76b7c3fb746c9d3ec6d6f4276153e4e15.jpg"
                      },
                      "responses": {
                        "": ""
                      },
                      "parameters": {},
                      "messageHandlers": {},
                      "title": "Wallet:human",
                      "timeout": "10000"
                    },
                    {
                      "type": "lab.html.Page",
                      "items": [
                        {
                          "type": "text",
                          "content": ""
                        },
                        {
                          "required": true,
                          "type": "likert",
                          "items": [
                            {
                              "label": "この広告に好感が持てる",
                              "coding": "FM1"
                            },
                            {
                              "label": "この広告は印象に残る",
                              "coding": "FM2"
                            },
                            {
                              "label": "この広告には違和感がある",
                              "coding": "FM3"
                            },
                            {
                              "label": "この広告はAIによって生成されたものだと思う",
                              "coding": "FM4"
                            },
                            {
                              "label": "この広告の人物に好感が持てる",
                              "coding": "FM5"
                            },
                            {
                              "label": "この広告の人物は印象に残る",
                              "coding": "FM6"
                            },
                            {
                              "label": "この広告の人物には違和感がある",
                              "coding": "FM7"
                            },
                            {
                              "label": "この商品を購入したい",
                              "coding": "FM8"
                            },
                            {
                              "label": "この商品は魅力的だと思う",
                              "coding": "FM9"
                            },
                            {
                              "label": "この商品は品質が高そうだと思う",
                              "coding": "FM10"
                            },
                            {
                              "label": "この商品に興味を持った",
                              "coding": "FM11"
                            },
                            {
                              "label": "この広告の情報は信頼できると思う",
                              "coding": "FM12"
                            },
                            {
                              "label": "この広告を出しているブランドは信頼できると思う",
                              "coding": "FM13"
                            }
                          ],
                          "width": "5",
                          "anchors": [
                            "1",
                            "2",
                            "3",
                            "4",
                            "5"
                          ],
                          "label": "当てはまるものをお答えください。",
                          "help": "1=全くそう思わない、2=そう思わない、3=どちらとも言えない、4=そう思う、5=非常にそう思う",
                          "name": "FM"
                        }
                      ],
                      "scrollTop": true,
                      "submitButtonText": "次へ",
                      "submitButtonPosition": "right",
                      "files": {},
                      "responses": {
                        "": ""
                      },
                      "parameters": {},
                      "messageHandlers": {},
                      "title": "question(FM)"
                    }
                  ]
                }
              ]
            },
            {
              "title": "medium error sequence",
              "type": "lab.flow.Sequence",
              "parameters": {},
              "plugins": [],
              "metadata": {
                "title": "",
                "description": "",
                "repository": "",
                "contributors": ""
              },
              "files": {},
              "responses": {},
              "content": [
                {
                  "type": "lab.html.Page",
                  "items": [
                    {
                      "type": "text",
                      "title": "",
                      "content": "この実験は\n1「AIキャラクターが使用された広告は消費者の購買意欲を低下させること」\n2「価格帯が高くなるほど、AIキャラクター広告の購買意欲の低下が顕著になること」を検証するために行われました。\nこの実験の意図にどの程度気づいていたかを5段階で評価してください。"
                    },
                    {
                      "required": true,
                      "type": "radio",
                      "label": "実験目的１に　5=完全に気付いていた　・・・　１＝全く気付かなかった",
                      "options": [
                        {
                          "label": "5",
                          "coding": "kizukiA_L_5"
                        },
                        {
                          "label": "4",
                          "coding": "kizukiA_L_4"
                        },
                        {
                          "label": "3",
                          "coding": "kizukiA_L_3"
                        },
                        {
                          "label": "2",
                          "coding": "kizukiA_L_2"
                        },
                        {
                          "label": "1",
                          "coding": "kizukiA_L_1"
                        }
                      ],
                      "name": "kizukiA_L"
                    },
                    {
                      "required": true,
                      "type": "radio",
                      "label": "実験目的２に　5=完全に気付いていた　・・・　１＝全く気付かなかった",
                      "options": [
                        {
                          "label": "5",
                          "coding": "kizukiB_L_5"
                        },
                        {
                          "label": "4",
                          "coding": "kizukiB_L_4"
                        },
                        {
                          "label": "3",
                          "coding": "kizukiB_L_3"
                        },
                        {
                          "label": "2",
                          "coding": "kizukiB_L_2"
                        },
                        {
                          "label": "1",
                          "coding": "kizukiB_L_1"
                        }
                      ],
                      "name": "kizukiB_L"
                    }
                  ],
                  "scrollTop": true,
                  "submitButtonText": "次へ →",
                  "submitButtonPosition": "right",
                  "files": {},
                  "responses": {
                    "": ""
                  },
                  "parameters": {},
                  "messageHandlers": {},
                  "title": "kizuitetaka"
                },
                {
                  "type": "lab.html.Page",
                  "items": [
                    {
                      "type": "text",
                      "title": "",
                      "content": ""
                    },
                    {
                      "required": true,
                      "type": "radio",
                      "options": [
                        {
                          "label": "実験・調査の実施に支障のある大きな問題が生じた",
                          "coding": "BigTRO"
                        },
                        {
                          "label": "実験・調査の実施に支障のない程度の問題が生じた",
                          "coding": "SmalTRO"
                        },
                        {
                          "label": "実験・調査の実施に問題はなかった",
                          "coding": "NoTRO"
                        }
                      ],
                      "label": "実験・調査を実施する上でなにか問題はありませんでしたか？",
                      "help": "例えば、プログラムの誤動作、来客や電話などの妨害、説明が分からなかったなども「問題」としてお答えください。",
                      "name": "Problem_M"
                    },
                    {
                      "required": false,
                      "type": "textarea",
                      "label": "問題の内容",
                      "help": "「実験・調査の実施に支障のある大きな問題が生じた」または「実験・調査の実施に支障のない程度の問題が生じた」とご回答くださった方は、その内容を以下に記入してください。",
                      "name": "ErrorReport_L"
                    }
                  ],
                  "scrollTop": true,
                  "submitButtonText": "次へ→",
                  "submitButtonPosition": "right",
                  "files": {},
                  "responses": {
                    "": ""
                  },
                  "parameters": {},
                  "messageHandlers": {},
                  "title": "Error"
                },
                {
                  "type": "lab.html.Page",
                  "items": [
                    {
                      "type": "text",
                      "title": "データの除外を希望しますか？",
                      "content": "今回ご提供いただいたデータは、研究発表などの学術利用に活用させていただく予定です。何らかの理由（同意を撤回したい、問題があったので除外してほしいなど）でデータの除外を希望される方はお知らせください。"
                    },
                    {
                      "required": true,
                      "type": "radio",
                      "options": [
                        {
                          "label": "はい、データを除外してください",
                          "coding": "Nodata"
                        },
                        {
                          "label": "いいえ、データを除外する必要はありません",
                          "coding": "Usedata"
                        }
                      ],
                      "name": "Exdata_M"
                    }
                  ],
                  "scrollTop": true,
                  "submitButtonText": "次へ →",
                  "submitButtonPosition": "right",
                  "files": {},
                  "responses": {
                    "": ""
                  },
                  "parameters": {},
                  "messageHandlers": {},
                  "title": "Exclusion Data"
                },
                {
                  "type": "lab.html.Page",
                  "items": [
                    {
                      "type": "text",
                      "title": "メールアドレスのご記入",
                      "content": "差し支えなければemailを記入してください。　謝礼金を送金する際に利用します。"
                    },
                    {
                      "required": false,
                      "type": "input",
                      "label": "メールアドレス",
                      "attributes": {
                        "type": "email",
                        "placeholder": "example@example.com"
                      },
                      "help": "半角で入力してください",
                      "name": "Email_M"
                    }
                  ],
                  "scrollTop": true,
                  "submitButtonText": "次へ",
                  "submitButtonPosition": "right",
                  "files": {},
                  "responses": {
                    "": ""
                  },
                  "parameters": {},
                  "messageHandlers": {},
                  "title": "email"
                },
                {
                  "type": "lab.html.Page",
                  "items": [
                    {
                      "type": "text",
                      "title": "これで実験は終了です。「終わり」ボタンを押してください。ご協力ありがとうございました。"
                    }
                  ],
                  "scrollTop": true,
                  "submitButtonText": "終わり",
                  "submitButtonPosition": "right",
                  "files": {},
                  "responses": {
                    "": ""
                  },
                  "parameters": {},
                  "messageHandlers": {
                    "before:prepare": function anonymous(
) {
//check Tardy
//ファイル名をランダムIDにする
const participantID = this.random.uuid4()

//csvファイルで保存する場合
const filename = participantID + "_data.csv"
const data = study.internals.controller.datastore.exportCsv();

fetch("https://pipe.jspsych.org/api/data/", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    Accept: "*/*",
  },
  body: JSON.stringify({
    experimentID: "J72tTsCSmJow",
    filename: filename,
    data: data,
  }),
});

}
                  },
                  "title": "End",
                  "tardy": true
                }
              ]
            }
          ]
        },
        {
          "title": "high all  sequence",
          "type": "lab.flow.Sequence",
          "parameters": {},
          "plugins": [],
          "metadata": {
            "title": "",
            "description": "",
            "repository": "",
            "contributors": ""
          },
          "skip": "${this.state.priceCond != 1}",
          "files": {},
          "responses": {},
          "content": [
            {
              "type": "lab.flow.Sequence",
              "files": {},
              "responses": {
                "": ""
              },
              "parameters": {},
              "messageHandlers": {},
              "title": "high random Sequence",
              "shuffle": true,
              "content": [
                {
                  "type": "lab.flow.Sequence",
                  "files": {},
                  "responses": {
                    "": ""
                  },
                  "parameters": {},
                  "messageHandlers": {},
                  "title": "Watch:human",
                  "content": [
                    {
                      "type": "lab.canvas.Screen",
                      "content": [
                        {
                          "type": "image",
                          "left": 0,
                          "top": 0,
                          "angle": 0,
                          "width": "400",
                          "height": "600",
                          "stroke": null,
                          "strokeWidth": 0,
                          "fill": "black",
                          "src": "${ this.files[\"udedokei kokakaku.jpg\"] }",
                          "autoScale": undefined
                        }
                      ],
                      "viewport": [
                        800,
                        600
                      ],
                      "files": {
                        "広告_腕時計_高価格.jpg": "embedded\u002F6efd0e8339fd8b03c27f86c7bf3e9bebab3651727689cf74cef8b8adcac52f79.jpg",
                        "腕高い.jpg": "embedded\u002Fc5da59f5081cc3c3d969c94feda5f6e69b4e30652131830151ac1d8a788bac3a.jpg",
                        "udedokei kokakaku.jpg": "embedded\u002F7a433bae83f66cb9198c6a8ed494aa1c994eaf8b444212c5b80b2e11b2cb997a.jpg"
                      },
                      "responses": {
                        "": ""
                      },
                      "parameters": {},
                      "messageHandlers": {},
                      "title": "Watch:human",
                      "timeout": "10000"
                    },
                    {
                      "type": "lab.html.Page",
                      "items": [
                        {
                          "type": "text",
                          "content": ""
                        },
                        {
                          "required": true,
                          "type": "likert",
                          "items": [
                            {
                              "label": "この広告に好感が持てる",
                              "coding": "WH1"
                            },
                            {
                              "label": "この広告は印象に残る",
                              "coding": "WH2"
                            },
                            {
                              "label": "この広告には違和感がある",
                              "coding": "WH3"
                            },
                            {
                              "label": "この広告はAIによって生成されたものだと思う",
                              "coding": "WH4"
                            },
                            {
                              "label": "この広告の人物に好感が持てる",
                              "coding": "WH5"
                            },
                            {
                              "label": "この広告の人物は印象に残る",
                              "coding": "WH6"
                            },
                            {
                              "label": "この広告の人物には違和感がある",
                              "coding": "WH7"
                            },
                            {
                              "label": "この商品を購入したい",
                              "coding": "WH8"
                            },
                            {
                              "label": "この商品は魅力的だと思う",
                              "coding": "WH9"
                            },
                            {
                              "label": "この商品は品質が高そうだと思う",
                              "coding": "WH10"
                            },
                            {
                              "label": "この商品に興味を持った",
                              "coding": "WH11"
                            },
                            {
                              "label": "この広告の情報は信頼できると思う",
                              "coding": "WH12"
                            },
                            {
                              "label": "この広告を出しているブランドは信頼できると思う",
                              "coding": "WH13"
                            }
                          ],
                          "width": "5",
                          "anchors": [
                            "1",
                            "2",
                            "3",
                            "4",
                            "5"
                          ],
                          "label": "当てはまるものをお答えください。",
                          "help": "1=全くそう思わない、2=そう思わない、3=どちらとも言えない、4=そう思う、5=非常にそう思う",
                          "name": "WH"
                        }
                      ],
                      "scrollTop": true,
                      "submitButtonText": "次へ",
                      "submitButtonPosition": "right",
                      "files": {},
                      "responses": {
                        "": ""
                      },
                      "parameters": {},
                      "messageHandlers": {},
                      "title": "question(WH)"
                    }
                  ]
                },
                {
                  "type": "lab.flow.Sequence",
                  "files": {},
                  "responses": {
                    "": ""
                  },
                  "parameters": {},
                  "messageHandlers": {},
                  "title": "Wallet:human",
                  "content": [
                    {
                      "type": "lab.canvas.Screen",
                      "content": [
                        {
                          "type": "image",
                          "left": 0,
                          "top": 0,
                          "angle": 0,
                          "width": "400",
                          "height": "600",
                          "stroke": null,
                          "strokeWidth": 0,
                          "fill": "black",
                          "src": "${ this.files[\"saihu kokakaku.jpg\"] }"
                        }
                      ],
                      "viewport": [
                        800,
                        600
                      ],
                      "files": {
                        "広告_財布_高価格.jpg": "embedded\u002F5e4b87fbff282caa8b7a7cc3885956e47e1c93ddf646b5219bc5aa9b823241f3.jpg",
                        "財布たか.jpg": "embedded\u002Fa2fa4204c53830001661cdb639dfb78c273b701a5b21d785744a0e859faa7383.jpg",
                        "saihu kokakaku.jpg": "embedded\u002Fbab283cdd6d9585fd9108a717e6ca555670753e0af9fe7f431e8a32b05047dfd.jpg"
                      },
                      "responses": {
                        "": ""
                      },
                      "parameters": {},
                      "messageHandlers": {},
                      "title": "Wallet:human",
                      "timeout": "10000"
                    },
                    {
                      "type": "lab.html.Page",
                      "items": [
                        {
                          "type": "text",
                          "content": ""
                        },
                        {
                          "required": true,
                          "type": "likert",
                          "items": [
                            {
                              "label": "この広告に好感が持てる",
                              "coding": "FH1"
                            },
                            {
                              "label": "この広告は印象に残る",
                              "coding": "FH2"
                            },
                            {
                              "label": "この広告には違和感がある",
                              "coding": "FH3"
                            },
                            {
                              "label": "この広告はAIによって生成されたものだと思う",
                              "coding": "FH4"
                            },
                            {
                              "label": "この広告の人物に好感が持てる",
                              "coding": "FH5"
                            },
                            {
                              "label": "この広告の人物は印象に残る",
                              "coding": "FH6"
                            },
                            {
                              "label": "この広告の人物には違和感がある",
                              "coding": "FH7"
                            },
                            {
                              "label": "この商品を購入したい",
                              "coding": "FH8"
                            },
                            {
                              "label": "この商品は魅力的だと思う",
                              "coding": "FH9"
                            },
                            {
                              "label": "この商品は品質が高そうだと思う",
                              "coding": "FH10"
                            },
                            {
                              "label": "この商品に興味を持った",
                              "coding": "FH11"
                            },
                            {
                              "label": "この広告の情報は信頼できると思う",
                              "coding": "FH12"
                            },
                            {
                              "label": "この広告を出しているブランドは信頼できると思う",
                              "coding": "FH13"
                            }
                          ],
                          "width": "5",
                          "anchors": [
                            "1",
                            "2",
                            "3",
                            "4",
                            "5"
                          ],
                          "label": "当てはまるものをお答えください。",
                          "help": "1=全くそう思わない、2=そう思わない、3=どちらとも言えない、4=そう思う、5=非常にそう思う",
                          "name": "FH"
                        }
                      ],
                      "scrollTop": true,
                      "submitButtonText": "次へ",
                      "submitButtonPosition": "right",
                      "files": {},
                      "responses": {
                        "": ""
                      },
                      "parameters": {},
                      "messageHandlers": {},
                      "title": "question(FH)"
                    }
                  ]
                }
              ]
            },
            {
              "type": "lab.flow.Sequence",
              "files": {},
              "responses": {
                "": ""
              },
              "parameters": {},
              "messageHandlers": {},
              "title": "high error Sequence",
              "content": [
                {
                  "type": "lab.html.Page",
                  "items": [
                    {
                      "type": "text",
                      "title": "",
                      "content": "この実験は\n1「AIキャラクターが使用された広告は消費者の購買意欲を低下させること」\n2「価格帯が高くなるほど、AIキャラクター広告の購買意欲の低下が顕著になること」を検証するために行われました。\nこの実験の意図にどの程度気づいていたかを5段階で評価してください。"
                    },
                    {
                      "required": true,
                      "type": "radio",
                      "label": "実験目的１に　5=完全に気付いていた　・・・　１＝全く気付かなかった",
                      "options": [
                        {
                          "label": "5",
                          "coding": "kizukiA_L_5"
                        },
                        {
                          "label": "4",
                          "coding": "kizukiA_L_4"
                        },
                        {
                          "label": "3",
                          "coding": "kizukiA_L_3"
                        },
                        {
                          "label": "2",
                          "coding": "kizukiA_L_2"
                        },
                        {
                          "label": "1",
                          "coding": "kizukiA_L_1"
                        }
                      ],
                      "name": "kizukiA_L"
                    },
                    {
                      "required": true,
                      "type": "radio",
                      "label": "実験目的２に　5=完全に気付いていた　・・・　１＝全く気付かなかった",
                      "options": [
                        {
                          "label": "5",
                          "coding": "kizukiB_L_5"
                        },
                        {
                          "label": "4",
                          "coding": "kizukiB_L_4"
                        },
                        {
                          "label": "3",
                          "coding": "kizukiB_L_3"
                        },
                        {
                          "label": "2",
                          "coding": "kizukiB_L_2"
                        },
                        {
                          "label": "1",
                          "coding": "kizukiB_L_1"
                        }
                      ],
                      "name": "kizukiB_L"
                    }
                  ],
                  "scrollTop": true,
                  "submitButtonText": "次へ →",
                  "submitButtonPosition": "right",
                  "files": {},
                  "responses": {
                    "": ""
                  },
                  "parameters": {},
                  "messageHandlers": {},
                  "title": "kizuitetaka"
                },
                {
                  "type": "lab.html.Page",
                  "items": [
                    {
                      "type": "text",
                      "title": "",
                      "content": ""
                    },
                    {
                      "required": true,
                      "type": "radio",
                      "options": [
                        {
                          "label": "実験・調査の実施に支障のある大きな問題が生じた",
                          "coding": "BigTRO"
                        },
                        {
                          "label": "実験・調査の実施に支障のない程度の問題が生じた",
                          "coding": "SmalTRO"
                        },
                        {
                          "label": "実験・調査の実施に問題はなかった",
                          "coding": "NoTRO"
                        }
                      ],
                      "label": "実験・調査を実施する上でなにか問題はありませんでしたか？",
                      "help": "例えば、プログラムの誤動作、来客や電話などの妨害、説明が分からなかったなども「問題」としてお答えください。",
                      "name": "Problem_H"
                    },
                    {
                      "required": false,
                      "type": "textarea",
                      "label": "問題の内容",
                      "help": "「実験・調査の実施に支障のある大きな問題が生じた」または「実験・調査の実施に支障のない程度の問題が生じた」とご回答くださった方は、その内容を以下に記入してください。",
                      "name": "ErrorReport"
                    }
                  ],
                  "scrollTop": true,
                  "submitButtonText": "次へ→",
                  "submitButtonPosition": "right",
                  "files": {},
                  "responses": {
                    "": ""
                  },
                  "parameters": {},
                  "messageHandlers": {},
                  "title": "Error"
                },
                {
                  "type": "lab.html.Page",
                  "items": [
                    {
                      "type": "text",
                      "title": "データの除外を希望しますか？",
                      "content": "今回ご提供いただいたデータは、研究発表などの学術利用に活用させていただく予定です。何らかの理由（同意を撤回したい、問題があったので除外してほしいなど）でデータの除外を希望される方はお知らせください。"
                    },
                    {
                      "required": true,
                      "type": "radio",
                      "options": [
                        {
                          "label": "はい、データを除外してください",
                          "coding": "Nodata"
                        },
                        {
                          "label": "いいえ、データを除外する必要はありません",
                          "coding": "Usedata"
                        }
                      ],
                      "name": "Exdata_H"
                    }
                  ],
                  "scrollTop": true,
                  "submitButtonText": "次へ →",
                  "submitButtonPosition": "right",
                  "files": {},
                  "responses": {
                    "": ""
                  },
                  "parameters": {},
                  "messageHandlers": {},
                  "title": "Exclusion Data"
                },
                {
                  "type": "lab.html.Page",
                  "items": [
                    {
                      "type": "text",
                      "title": "メールアドレスのご記入",
                      "content": "差し支えなければemailを記入してください。　謝礼金を送金する際に利用します。"
                    },
                    {
                      "required": false,
                      "type": "input",
                      "label": "メールアドレス",
                      "attributes": {
                        "type": "email",
                        "placeholder": "example@example.com"
                      },
                      "help": "半角で入力してください",
                      "name": "Email_H"
                    }
                  ],
                  "scrollTop": true,
                  "submitButtonText": "次へ",
                  "submitButtonPosition": "right",
                  "files": {},
                  "responses": {
                    "": ""
                  },
                  "parameters": {},
                  "messageHandlers": {},
                  "title": "email"
                },
                {
                  "type": "lab.html.Page",
                  "items": [
                    {
                      "type": "text",
                      "title": "これで実験は終了です。ご協力ありがとうございました。"
                    }
                  ],
                  "scrollTop": true,
                  "submitButtonText": "終わり",
                  "submitButtonPosition": "right",
                  "files": {},
                  "responses": {
                    "": ""
                  },
                  "parameters": {},
                  "messageHandlers": {
                    "before:prepare": function anonymous(
) {
//check Tardy
//ファイル名をランダムIDにする
const participantID = this.random.uuid4()

//csvファイルで保存する場合
const filename = participantID + "_data.csv"
const data = study.internals.controller.datastore.exportCsv();

fetch("https://pipe.jspsych.org/api/data/", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    Accept: "*/*",
  },
  body: JSON.stringify({
    experimentID: "J72tTsCSmJow",
    filename: filename,
    data: data,
  }),
});

}
                  },
                  "title": "End",
                  "tardy": true
                }
              ]
            }
          ]
        }
      ]
    }
  ]
})

// Let's go!
study.run()