const ENCODED_USER = "Y29udGFjdA==";
const ENCODED_DOMAIN = "cHJhc29uLmRldg==";

export function getEmailAddress(): string {
    return `${atob(ENCODED_USER)}@${atob(ENCODED_DOMAIN)}`;
}
