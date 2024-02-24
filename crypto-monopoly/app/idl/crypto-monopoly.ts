export type CryptoMonopoly = {
  "version": "0.1.0",
  "name": "crypto_monopoly",
  "instructions": [
    {
      "name": "initGame",
      "accounts": [
        {
          "name": "gameData",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "buyin",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "signer",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "levelSeed",
          "type": "string"
        }
      ]
    },
    {
      "name": "initPlayer",
      "accounts": [
        {
          "name": "gameData",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "signer",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "levelSeed",
          "type": "string"
        }
      ]
    },
    {
      "name": "whoseTurn",
      "accounts": [
        {
          "name": "gameData",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "signer",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "levelSeed",
          "type": "string"
        }
      ],
      "returns": "publicKey"
    },
    {
      "name": "getLastRoll",
      "accounts": [
        {
          "name": "gameData",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "signer",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "levelSeed",
          "type": "string"
        }
      ],
      "returns": "u8"
    },
    {
      "name": "startTurn",
      "accounts": [
        {
          "name": "gameData",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "signer",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "levelSeed",
          "type": "string"
        }
      ],
      "returns": {
        "defined": "MoveResult"
      }
    }
  ],
  "accounts": [
    {
      "name": "buyinInfo",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "data",
            "type": "u32"
          }
        ]
      }
    },
    {
      "name": "gameData",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "buyin",
            "type": "u32"
          },
          {
            "name": "turn",
            "type": "u8"
          },
          {
            "name": "state",
            "type": {
              "defined": "State"
            }
          },
          {
            "name": "props",
            "type": {
              "array": [
                {
                  "defined": "Prop"
                },
                28
              ]
            }
          },
          {
            "name": "players",
            "type": {
              "array": [
                {
                  "defined": "Player"
                },
                4
              ]
            }
          },
          {
            "name": "n",
            "type": "u8"
          },
          {
            "name": "lastRoll",
            "type": "u8"
          }
        ]
      }
    }
  ],
  "types": [
    {
      "name": "Player",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "playerId",
            "type": "u8"
          },
          {
            "name": "acct",
            "type": "publicKey"
          },
          {
            "name": "balance",
            "type": "u64"
          },
          {
            "name": "loanAmt",
            "type": "u64"
          },
          {
            "name": "ir",
            "type": "f64"
          },
          {
            "name": "termLeft",
            "type": "u8"
          },
          {
            "name": "pos",
            "type": "u8"
          },
          {
            "name": "solOwed",
            "type": "i64"
          }
        ]
      }
    },
    {
      "name": "Prop",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "id",
            "type": "u8"
          },
          {
            "name": "price",
            "type": "u64"
          },
          {
            "name": "color",
            "type": "u8"
          },
          {
            "name": "rent",
            "type": "u16"
          },
          {
            "name": "ownerId",
            "type": "u8"
          },
          {
            "name": "hasMono",
            "type": "bool"
          }
        ]
      }
    },
    {
      "name": "Colors",
      "type": {
        "kind": "enum",
        "variants": [
          {
            "name": "None"
          },
          {
            "name": "Brown"
          },
          {
            "name": "Orange"
          },
          {
            "name": "Pink"
          },
          {
            "name": "LightBlue"
          },
          {
            "name": "Red"
          },
          {
            "name": "Yellow"
          },
          {
            "name": "Green"
          },
          {
            "name": "Blue"
          }
        ]
      }
    },
    {
      "name": "State",
      "type": {
        "kind": "enum",
        "variants": [
          {
            "name": "Empty"
          },
          {
            "name": "GameSetupProgress"
          },
          {
            "name": "GameSetupComplete"
          },
          {
            "name": "PreRoll"
          },
          {
            "name": "PostRoll"
          },
          {
            "name": "AfterGame"
          }
        ]
      }
    },
    {
      "name": "MoveResult",
      "type": {
        "kind": "enum",
        "variants": [
          {
            "name": "Noop"
          },
          {
            "name": "Rent"
          },
          {
            "name": "BuyOption"
          }
        ]
      }
    }
  ],
  "errors": [
    {
      "code": 6000,
      "name": "NotEnoughEnergy",
      "msg": "Not enough energy"
    },
    {
      "code": 6001,
      "name": "WrongAuthority",
      "msg": "Wrong Authority"
    },
    {
      "code": 6002,
      "name": "NonEmptyGameState",
      "msg": "Game non-empty state"
    },
    {
      "code": 6003,
      "name": "PlayerIndexNotFound",
      "msg": "Player Index Not Found"
    },
    {
      "code": 6004,
      "name": "NotYourTurn",
      "msg": "Not your turn"
    }
  ]
};

export const IDL: CryptoMonopoly = {
  "version": "0.1.0",
  "name": "crypto_monopoly",
  "instructions": [
    {
      "name": "initGame",
      "accounts": [
        {
          "name": "gameData",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "buyin",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "signer",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "levelSeed",
          "type": "string"
        }
      ]
    },
    {
      "name": "initPlayer",
      "accounts": [
        {
          "name": "gameData",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "signer",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "levelSeed",
          "type": "string"
        }
      ]
    },
    {
      "name": "whoseTurn",
      "accounts": [
        {
          "name": "gameData",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "signer",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "levelSeed",
          "type": "string"
        }
      ],
      "returns": "publicKey"
    },
    {
      "name": "getLastRoll",
      "accounts": [
        {
          "name": "gameData",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "signer",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "levelSeed",
          "type": "string"
        }
      ],
      "returns": "u8"
    },
    {
      "name": "startTurn",
      "accounts": [
        {
          "name": "gameData",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "signer",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "levelSeed",
          "type": "string"
        }
      ],
      "returns": {
        "defined": "MoveResult"
      }
    }
  ],
  "accounts": [
    {
      "name": "buyinInfo",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "data",
            "type": "u32"
          }
        ]
      }
    },
    {
      "name": "gameData",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "buyin",
            "type": "u32"
          },
          {
            "name": "turn",
            "type": "u8"
          },
          {
            "name": "state",
            "type": {
              "defined": "State"
            }
          },
          {
            "name": "props",
            "type": {
              "array": [
                {
                  "defined": "Prop"
                },
                28
              ]
            }
          },
          {
            "name": "players",
            "type": {
              "array": [
                {
                  "defined": "Player"
                },
                4
              ]
            }
          },
          {
            "name": "n",
            "type": "u8"
          },
          {
            "name": "lastRoll",
            "type": "u8"
          }
        ]
      }
    }
  ],
  "types": [
    {
      "name": "Player",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "playerId",
            "type": "u8"
          },
          {
            "name": "acct",
            "type": "publicKey"
          },
          {
            "name": "balance",
            "type": "u64"
          },
          {
            "name": "loanAmt",
            "type": "u64"
          },
          {
            "name": "ir",
            "type": "f64"
          },
          {
            "name": "termLeft",
            "type": "u8"
          },
          {
            "name": "pos",
            "type": "u8"
          },
          {
            "name": "solOwed",
            "type": "i64"
          }
        ]
      }
    },
    {
      "name": "Prop",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "id",
            "type": "u8"
          },
          {
            "name": "price",
            "type": "u64"
          },
          {
            "name": "color",
            "type": "u8"
          },
          {
            "name": "rent",
            "type": "u16"
          },
          {
            "name": "ownerId",
            "type": "u8"
          },
          {
            "name": "hasMono",
            "type": "bool"
          }
        ]
      }
    },
    {
      "name": "Colors",
      "type": {
        "kind": "enum",
        "variants": [
          {
            "name": "None"
          },
          {
            "name": "Brown"
          },
          {
            "name": "Orange"
          },
          {
            "name": "Pink"
          },
          {
            "name": "LightBlue"
          },
          {
            "name": "Red"
          },
          {
            "name": "Yellow"
          },
          {
            "name": "Green"
          },
          {
            "name": "Blue"
          }
        ]
      }
    },
    {
      "name": "State",
      "type": {
        "kind": "enum",
        "variants": [
          {
            "name": "Empty"
          },
          {
            "name": "GameSetupProgress"
          },
          {
            "name": "GameSetupComplete"
          },
          {
            "name": "PreRoll"
          },
          {
            "name": "PostRoll"
          },
          {
            "name": "AfterGame"
          }
        ]
      }
    },
    {
      "name": "MoveResult",
      "type": {
        "kind": "enum",
        "variants": [
          {
            "name": "Noop"
          },
          {
            "name": "Rent"
          },
          {
            "name": "BuyOption"
          }
        ]
      }
    }
  ],
  "errors": [
    {
      "code": 6000,
      "name": "NotEnoughEnergy",
      "msg": "Not enough energy"
    },
    {
      "code": 6001,
      "name": "WrongAuthority",
      "msg": "Wrong Authority"
    },
    {
      "code": 6002,
      "name": "NonEmptyGameState",
      "msg": "Game non-empty state"
    },
    {
      "code": 6003,
      "name": "PlayerIndexNotFound",
      "msg": "Player Index Not Found"
    },
    {
      "code": 6004,
      "name": "NotYourTurn",
      "msg": "Not your turn"
    }
  ]
};
