const Connect: (config: String, session: String, notif: {
    icon: String, // Name of the icon in /res directory
    title: String,
    text: String
}) => Promise<String>;
const Disconnect: () => void;
const Status: () => Promise<String>;
const Version: () => Promise<String>;
const EV_TYPE_EXCEPTION: String
const EV_TYPE_REGULAR: String;
const EV_REVOKED: String;
const EV_HOST_DESTROYED: String;
const EV_HOST_RESUMED: String;
const EV_HOST_PAUSED: String;
export {
    Connect,
    Disconnect,
    Status,
    Version,
    EV_TYPE_EXCEPTION,
    EV_TYPE_REGULAR,
    EV_REVOKED,
    EV_HOST_DESTROYED,
    EV_HOST_RESUMED,
    EV_HOST_PAUSED
}