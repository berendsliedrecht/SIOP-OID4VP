export const AuthenticationResponseOptsSchema = {
  "$schema": "http://json-schema.org/draft-07/schema#",
  "$ref": "#/definitions/AuthenticationResponseOpts",
  "definitions": {
    "AuthenticationResponseOpts": {
      "type": "object",
      "properties": {
        "redirectUri": {
          "type": "string"
        },
        "signatureType": {
          "anyOf": [
            {
              "$ref": "#/definitions/InternalSignature"
            },
            {
              "$ref": "#/definitions/ExternalSignature"
            },
            {
              "$ref": "#/definitions/SuppliedSignature"
            }
          ]
        },
        "nonce": {
          "type": "string"
        },
        "state": {
          "type": "string"
        },
        "registration": {
          "$ref": "#/definitions/ResponseRegistrationOpts"
        },
        "responseMode": {
          "$ref": "#/definitions/ResponseMode"
        },
        "did": {
          "type": "string"
        },
        "vp": {
          "type": "array",
          "items": {
            "$ref": "#/definitions/VerifiablePresentationResponseOpts"
          }
        },
        "expiresIn": {
          "type": "number"
        }
      },
      "required": [
        "signatureType",
        "registration",
        "did"
      ],
      "additionalProperties": false
    },
    "InternalSignature": {
      "type": "object",
      "properties": {
        "hexPrivateKey": {
          "type": "string"
        },
        "did": {
          "type": "string"
        },
        "kid": {
          "type": "string"
        }
      },
      "required": [
        "hexPrivateKey",
        "did"
      ],
      "additionalProperties": false
    },
    "ExternalSignature": {
      "type": "object",
      "properties": {
        "signatureUri": {
          "type": "string"
        },
        "did": {
          "type": "string"
        },
        "authZToken": {
          "type": "string"
        },
        "hexPublicKey": {
          "type": "string"
        },
        "kid": {
          "type": "string"
        }
      },
      "required": [
        "signatureUri",
        "did"
      ],
      "additionalProperties": false
    },
    "SuppliedSignature": {
      "type": "object",
      "properties": {
        "did": {
          "type": "string"
        },
        "kid": {
          "type": "string"
        }
      },
      "required": [
        "did",
        "kid"
      ],
      "additionalProperties": true
    },
    "ResponseRegistrationOpts": {
      "type": "object",
      "properties": {
        "vpFormats": {
          "$ref": "#/definitions/Format"
        },
        "authorizationEndpoint": {
          "type": "string"
        },
        "tokenEndpoint": {
          "type": "string"
        },
        "userinfoEndpoint": {
          "type": "string"
        },
        "issuer": {
          "$ref": "#/definitions/ResponseIss"
        },
        "jwksUri": {
          "type": "string"
        },
        "registrationEndpoint": {
          "type": "string"
        },
        "responseTypesSupported": {
          "anyOf": [
            {
              "type": "array",
              "items": {
                "$ref": "#/definitions/ResponseType"
              }
            },
            {
              "$ref": "#/definitions/ResponseType"
            }
          ]
        },
        "responseModesSupported": {
          "type": "array",
          "items": {
            "$ref": "#/definitions/ResponseMode"
          }
        },
        "grantTypesSupported": {
          "type": "array",
          "items": {
            "$ref": "#/definitions/GrantType"
          }
        },
        "acrValuesSupported": {
          "type": "array",
          "items": {
            "$ref": "#/definitions/AuthenticationContextReferences"
          }
        },
        "scopesSupported": {
          "type": "array",
          "items": {
            "$ref": "#/definitions/Scope"
          }
        },
        "subjectTypesSupported": {
          "type": "array",
          "items": {
            "$ref": "#/definitions/SubjectType"
          }
        },
        "idTokenSigningAlgValuesSupported": {
          "type": "array",
          "items": {
            "$ref": "#/definitions/SigningAlgo"
          }
        },
        "idTokenEncryptionAlgValuesSupported": {
          "type": "array",
          "items": {
            "$ref": "#/definitions/KeyAlgo"
          }
        },
        "idTokenEncryptionEncValuesSupported": {
          "type": "array",
          "items": {
            "type": "string"
          }
        },
        "userinfoSigningAlgValuesSupported": {
          "type": "array",
          "items": {
            "$ref": "#/definitions/SigningAlgo"
          }
        },
        "userinfoEncryptionAlgValuesSupported": {
          "type": "array",
          "items": {
            "$ref": "#/definitions/SigningAlgo"
          }
        },
        "userinfoEncryptionEncValuesSupported": {
          "type": "array",
          "items": {
            "type": "string"
          }
        },
        "requestObjectSigningAlgValuesSupported": {
          "type": "array",
          "items": {
            "$ref": "#/definitions/SigningAlgo"
          }
        },
        "requestObjectEncryptionAlgValuesSupported": {
          "type": "array",
          "items": {
            "$ref": "#/definitions/SigningAlgo"
          }
        },
        "requestObjectEncryptionEncValuesSupported": {
          "type": "array",
          "items": {
            "type": "string"
          }
        },
        "tokenEndpointAuthMethodsSupported": {
          "type": "array",
          "items": {
            "$ref": "#/definitions/TokenEndpointAuthMethod"
          }
        },
        "tokenEndpointAuthSigningAlgValuesSupported": {
          "type": "array",
          "items": {
            "$ref": "#/definitions/SigningAlgo"
          }
        },
        "displayValuesSupported": {
          "type": "array",
          "items": {}
        },
        "claimTypesSupported": {
          "type": "array",
          "items": {
            "$ref": "#/definitions/ClaimType"
          }
        },
        "claimsSupported": {
          "type": "array",
          "items": {
            "type": "string"
          }
        },
        "serviceDocumentation": {
          "type": "string"
        },
        "claimsLocalesSupported": {
          "type": "array",
          "items": {
            "type": "string"
          }
        },
        "uiLocalesSupported": {
          "type": "array",
          "items": {
            "type": "string"
          }
        },
        "claimsParameterSupported": {
          "type": "boolean"
        },
        "requestParameterSupported": {
          "type": "boolean"
        },
        "requestUriParameterSupported": {
          "type": "boolean"
        },
        "requireRequestUriRegistration": {
          "type": "boolean"
        },
        "opPolicyUri": {
          "type": "string"
        },
        "opTosUri": {
          "type": "string"
        },
        "subjectSyntaxTypesSupported": {
          "type": "array",
          "items": {
            "type": "string"
          }
        },
        "idTokenTypesSupported": {
          "type": "array",
          "items": {
            "$ref": "#/definitions/IdTokenType"
          }
        },
        "registrationBy": {
          "$ref": "#/definitions/RegistrationType"
        }
      },
      "required": [
        "registrationBy"
      ],
      "additionalProperties": false
    },
    "Format": {
      "type": "object",
      "properties": {
        "jwt": {
          "$ref": "#/definitions/JwtObject"
        },
        "jwt_vc": {
          "$ref": "#/definitions/JwtObject"
        },
        "jwt_vp": {
          "$ref": "#/definitions/JwtObject"
        },
        "ldp": {
          "$ref": "#/definitions/LdpObject"
        },
        "ldp_vc": {
          "$ref": "#/definitions/LdpObject"
        },
        "ldp_vp": {
          "$ref": "#/definitions/LdpObject"
        }
      },
      "additionalProperties": false
    },
    "JwtObject": {
      "type": "object",
      "properties": {
        "alg": {
          "type": "array",
          "items": {
            "type": "string"
          }
        }
      },
      "required": [
        "alg"
      ],
      "additionalProperties": false
    },
    "LdpObject": {
      "type": "object",
      "properties": {
        "proof_type": {
          "type": "array",
          "items": {
            "type": "string"
          }
        }
      },
      "required": [
        "proof_type"
      ],
      "additionalProperties": false
    },
    "ResponseIss": {
      "type": "string",
      "enum": [
        "https://self-issued.me",
        "https://self-issued.me/v2"
      ]
    },
    "ResponseType": {
      "type": "string",
      "enum": [
        "id_token",
        "vp_token"
      ]
    },
    "ResponseMode": {
      "type": "string",
      "enum": [
        "fragment",
        "form_post",
        "post",
        "query"
      ]
    },
    "GrantType": {
      "type": "string",
      "enum": [
        "authorization_code",
        "implicit"
      ]
    },
    "AuthenticationContextReferences": {
      "type": "string",
      "enum": [
        "phr",
        "phrh"
      ]
    },
    "Scope": {
      "type": "string",
      "enum": [
        "openid",
        "openid did_authn",
        "profile",
        "email",
        "address",
        "phone"
      ]
    },
    "SubjectType": {
      "type": "string",
      "enum": [
        "public",
        "pairwise"
      ]
    },
    "SigningAlgo": {
      "type": "string",
      "enum": [
        "EdDSA",
        "RS256",
        "ES256",
        "ES256K",
        "none"
      ]
    },
    "KeyAlgo": {
      "type": "string",
      "enum": [
        "EdDSA",
        "RS256",
        "ES256",
        "ES256K"
      ]
    },
    "TokenEndpointAuthMethod": {
      "type": "string",
      "enum": [
        "client_secret_post",
        "client_secret_basic",
        "client_secret_jwt",
        "private_key_jwt"
      ]
    },
    "ClaimType": {
      "type": "string",
      "enum": [
        "normal",
        "aggregated",
        "distributed"
      ]
    },
    "IdTokenType": {
      "type": "string",
      "enum": [
        "subject_signed",
        "attester_signed"
      ]
    },
    "RegistrationType": {
      "type": "object",
      "properties": {
        "type": {
          "type": "string",
          "enum": [
            "REFERENCE",
            "VALUE"
          ]
        },
        "referenceUri": {
          "type": "string"
        },
        "id_token_encrypted_response_alg": {
          "$ref": "#/definitions/EncKeyAlgorithm"
        },
        "id_token_encrypted_response_enc": {
          "$ref": "#/definitions/EncSymmetricAlgorithmCode"
        }
      },
      "additionalProperties": false,
      "required": [
        "type"
      ]
    },
    "EncKeyAlgorithm": {
      "type": "string",
      "const": "ECDH-ES"
    },
    "EncSymmetricAlgorithmCode": {
      "type": "string",
      "const": "XC20P"
    },
    "VerifiablePresentationResponseOpts": {
      "type": "object",
      "properties": {
        "format": {
          "$ref": "#/definitions/VerifiablePresentationTypeFormat"
        },
        "presentation": {
          "$ref": "#/definitions/IPresentation"
        },
        "location": {
          "$ref": "#/definitions/PresentationLocation"
        }
      },
      "required": [
        "format",
        "location",
        "presentation"
      ],
      "additionalProperties": false
    },
    "VerifiablePresentationTypeFormat": {
      "type": "string",
      "enum": [
        "jwt_vp",
        "ldp_vp"
      ]
    },
    "IPresentation": {
      "type": "object",
      "properties": {
        "@context": {
          "anyOf": [
            {
              "$ref": "#/definitions/ICredentialContextType"
            },
            {
              "type": "array",
              "items": {
                "$ref": "#/definitions/ICredentialContextType"
              }
            }
          ]
        },
        "type": {
          "type": "array",
          "items": {
            "type": "string"
          }
        },
        "verifiableCredential": {
          "type": "array",
          "items": {
            "$ref": "#/definitions/IVerifiableCredential"
          }
        },
        "presentation_submission": {
          "$ref": "#/definitions/PresentationSubmission"
        },
        "holder": {
          "type": "string"
        }
      },
      "required": [
        "@context",
        "type",
        "verifiableCredential"
      ],
      "additionalProperties": false
    },
    "ICredentialContextType": {
      "anyOf": [
        {
          "$ref": "#/definitions/ICredentialContext"
        },
        {
          "type": "string"
        }
      ]
    },
    "ICredentialContext": {
      "type": "object",
      "properties": {
        "name": {
          "type": "string"
        },
        "did": {
          "type": "string"
        }
      },
      "additionalProperties": {}
    },
    "IVerifiableCredential": {
      "type": "object",
      "properties": {
        "proof": {
          "anyOf": [
            {
              "$ref": "#/definitions/IProof"
            },
            {
              "type": "array",
              "items": {
                "$ref": "#/definitions/IProof"
              }
            }
          ]
        },
        "expirationDate": {
          "type": "string"
        },
        "issuer": {
          "anyOf": [
            {
              "type": "string"
            },
            {
              "$ref": "#/definitions/IIssuer"
            }
          ]
        },
        "issuanceDate": {
          "type": "string"
        },
        "credentialSubject": {
          "$ref": "#/definitions/ICredentialSubject"
        },
        "id": {
          "type": "string"
        },
        "@context": {
          "anyOf": [
            {
              "type": "array",
              "items": {
                "$ref": "#/definitions/ICredentialContextType"
              }
            },
            {
              "$ref": "#/definitions/ICredentialContextType"
            }
          ]
        },
        "credentialStatus": {
          "$ref": "#/definitions/ICredentialStatus"
        },
        "credentialSchema": {
          "anyOf": [
            {
              "$ref": "#/definitions/ICredentialSchemaType"
            },
            {
              "type": "array",
              "items": {
                "$ref": "#/definitions/ICredentialSchemaType"
              }
            }
          ]
        },
        "description": {
          "type": "string"
        },
        "name": {
          "type": "string"
        },
        "type": {
          "type": "array",
          "items": {
            "type": "string"
          }
        }
      },
      "required": [
        "@context",
        "credentialSubject",
        "id",
        "issuanceDate",
        "issuer",
        "proof",
        "type"
      ]
    },
    "IProof": {
      "type": "object",
      "properties": {
        "type": {
          "anyOf": [
            {
              "$ref": "#/definitions/ProofType"
            },
            {
              "type": "string"
            }
          ]
        },
        "created": {
          "type": "string"
        },
        "proofPurpose": {
          "anyOf": [
            {
              "$ref": "#/definitions/ProofPurpose"
            },
            {
              "type": "string"
            }
          ]
        },
        "verificationMethod": {
          "type": "string"
        },
        "challenge": {
          "type": "string"
        },
        "domain": {
          "type": "string"
        },
        "proofValue": {
          "type": "string"
        },
        "jws": {
          "type": "string"
        },
        "nonce": {
          "type": "string"
        },
        "requiredRevealStatements": {
          "type": "array",
          "items": {
            "type": "string"
          }
        }
      },
      "required": [
        "type",
        "created",
        "proofPurpose",
        "verificationMethod"
      ],
      "additionalProperties": {
        "anyOf": [
          {
            "type": "string"
          },
          {
            "type": "array",
            "items": {
              "type": "string"
            }
          },
          {
            "not": {}
          }
        ]
      }
    },
    "ProofType": {
      "type": "string",
      "enum": [
        "Ed25519Signature2018",
        "Ed25519Signature2020",
        "EcdsaSecp256k1Signature2019",
        "EcdsaSecp256k1RecoverySignature2020",
        "JsonWebSignature2020",
        "RsaSignature2018",
        "GpgSignature2020",
        "JcsEd25519Signature2020",
        "BbsBlsSignatureProof2020",
        "BbsBlsBoundSignatureProof2020"
      ]
    },
    "ProofPurpose": {
      "type": "string",
      "enum": [
        "assertionMethod",
        "authentication",
        "keyAgreement",
        "contactAgreement",
        "capabilityInvocation",
        "capabilityDelegation"
      ]
    },
    "IIssuer": {
      "type": "object",
      "properties": {
        "id": {
          "type": "string"
        }
      },
      "required": [
        "id"
      ],
      "additionalProperties": {}
    },
    "ICredentialSubject": {
      "type": "object",
      "properties": {
        "id": {
          "type": "string"
        }
      },
      "additionalProperties": {}
    },
    "ICredentialStatus": {
      "type": "object",
      "properties": {
        "id": {
          "type": "string"
        },
        "type": {
          "type": "string"
        }
      },
      "required": [
        "id",
        "type"
      ],
      "additionalProperties": false
    },
    "ICredentialSchemaType": {
      "anyOf": [
        {
          "$ref": "#/definitions/ICredentialSchema"
        },
        {
          "type": "string"
        }
      ]
    },
    "ICredentialSchema": {
      "type": "object",
      "properties": {
        "id": {
          "type": "string"
        },
        "type": {
          "type": "string"
        }
      },
      "required": [
        "id"
      ],
      "additionalProperties": false
    },
    "PresentationSubmission": {
      "type": "object",
      "properties": {
        "id": {
          "type": "string"
        },
        "definition_id": {
          "type": "string"
        },
        "descriptor_map": {
          "type": "array",
          "items": {
            "$ref": "#/definitions/Descriptor"
          }
        }
      },
      "required": [
        "id",
        "definition_id",
        "descriptor_map"
      ],
      "additionalProperties": false
    },
    "Descriptor": {
      "type": "object",
      "properties": {
        "id": {
          "type": "string"
        },
        "path": {
          "type": "string"
        },
        "path_nested": {
          "$ref": "#/definitions/Descriptor"
        },
        "format": {
          "type": "string"
        }
      },
      "required": [
        "id",
        "path",
        "format"
      ],
      "additionalProperties": false
    },
    "PresentationLocation": {
      "type": "string",
      "enum": [
        "vp_token",
        "id_token"
      ]
    }
  }
};