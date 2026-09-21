const ENCODED_USER = "aWJhcmFnaWFraXJhMjAwNw==";
const ENCODED_DOMAIN = "Z21haWwuY29t";

export function getEmailAddress(): string {
    return `${atob(ENCODED_USER)}@${atob(ENCODED_DOMAIN)}`;
}
