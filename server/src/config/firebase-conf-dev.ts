import { getEnvVariable } from '../common/utils/env';

export const firebaseConfig = {
    type: "service_account",
    project_id: "reddit-clone-69",
    private_key_id: getEnvVariable('FIREBASE_PRIVATE_KEY_ID'),
    private_key: '-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQDG37lZm5qNbJer\nR8jQhbUad/Zl3lp8/u9SR1jW4UCqU2i6uxOL/t6kREjMDyPijLbGXLNPN8kA4vDd\n/sdgDfczEq6q9QcMpZQiQbUVq364sCJzZ4z5NKO4rI15crV/8JhSJDe3u7lhSurz\nDiRe7Dh1WsAwpaA44jmj0OWLTTKJI3XH/LlM3Loe+K6+LBHH9gkD42otUrRvyLUU\n+i8LjDvnwpkZOb4VBPsAA2ISQBen5OIVwt7kKkKxPd2uh46wFFzVaIY9rfPNqK55\nRriznJkt78Ilh67+BC1c14zhscdthnLDNPKdy+8w6bOq9fg+eDmaYpASa4lEB7nR\nKTkuKGyVAgMBAAECggEAAT5H0CnqtCWbTNPHMhUysg5Je2+0I4LZSL79G2uksDpz\n9bC1n3fPY8GpGqo1BUUeY3Yy7gwkMBUf+IUECobDlQ95nLTP9dF6JlghZF26ila1\nQC+ZOOopSUIyiZ4XErjp9M47u/g+ZTfgRh2ZiHU7v/ko28rQ6wTJlgmTfFcrfz1W\nV3ICjr3Ip/llQzS7OKY6h2O4wtyRIZicOmmCX8eqeDiYz+Txc4qLoOMPbxH5KJJv\n7W4LQxQ7Qq8W7ibQkCksPl8PeKNlYKxo+GW6pRSxoU9u8Mox4JiH/0nuYsDPAw/d\nnN3yDV0Z1ylRonCu7B5asy9zUY6JdX9+1T5ZJqqoRwKBgQDm+PX3lSIN+oLDqlYI\nWMgUTLKp0cY6ujCSyLJ+xm/Cn/xXZll5im1kcxyiw7kLPf3kYHRCtgyjHpCQnhxJ\nWUEfUobmqTsMPAsaqAcoW8vjJbqsqx6N+4LaK9gag5YcSNPDy4kr14nxys1VB7nh\nWjtw6HKVxOAb/wUtKna8sb9powKBgQDcbF4lTlryxEoz5rqqYiVtpnnUF4CgiUUV\nrulUtnbaDEn2Ek5QrbK85YTC13YBvo3eN+7fVrIe2EJbAoxRoh7/us/2IIgGdFV7\nE7v5HHZu+CioZCnek85/3ZIzbb/VOGPpf8zKmtJZaBzp6rFSQEPFPkJxeGXXkDUO\n0QjTbC4kZwKBgQDGlKIVHTlMP2eSBq81Oe+71D1/2AXQlCgS607bxIxuDtML6clf\nv+5RgM7L+e7shX32jh8nBBJVZH/ydp3nSj+9SF0Hj9Rernj1kCWnQ1VGlDetIOqC\nNA3KugtwsFWtN8gp/KKQ+R12r2BejOf5onScnJ13uu7b4yR2Mp4nmcLydQKBgHv7\nnI0BYNjSniZJbs+tuv3NOROaUKh77db/dpFGvN1zMhruOwzYVwQ3WZC63s6mX2gS\nMBOB0VjWLaTBbynvtd4ENztrGvf+caJz/DRn1RogDcaB6KcgnnN/rt+sqM2HFXPe\nhdOkeBMAI9tTPoBUU4pbtcXbgfVZUO7Pl1ZMsDubAoGAMj6xvpwnEwyzUcsA2zI8\nB8/Wz57C/4nuBqlf6cSyjgk7YHv2NvXB9bx9NNwj0i2TJNDomJ0+AelB3PgO3y/S\nWJBb0blNmohxkJgTFiJDNEvmWavgAapMwKQ2e/HLhPmLhrrmLn9d3BhqL/wrkM8r\nAJqV4klmSpjJmoo31arGOgM=\n-----END PRIVATE KEY-----\n',
    client_email: "firebase-adminsdk-ra3vh@reddit-clone-69.iam.gserviceaccount.com",
    client_id: "102237882879306488228",
    auth_uri: "https://accounts.google.com/o/oauth2/auth",
    token_uri: "https://oauth2.googleapis.com/token",
    auth_provider_x509_cert_url: "https://www.googleapis.com/oauth2/v1/certs",
    client_x509_cert_url: "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-ra3vh%40reddit-clone-69.iam.gserviceaccount.com"
};