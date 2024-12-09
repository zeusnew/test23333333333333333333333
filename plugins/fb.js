const { fetchJson } = require("../lib/functions");
const config = require("../config");
const { cmd, commands } = require("../command");

// FETCH API URL
let baseUrl;
(async () => {
    let baseUrlGet = await fetchJson(
        `https://raw.githubusercontent.com/prabathLK/PUBLIC-URL-HOST-DB/main/public/url.json`,
    );
    baseUrl = baseUrlGet.api;
})();
//fb downloader
cmd(
    {
        pattern: "fb",
        desc: "Download fb videos",
        category: "download",
        react: "🔎",
        filename: __filename,
    },
    async (
        conn,
        mek,
        m,
        {
            from,
            quoted,
            body,
            isCmd,
            command,
            args,
            q,
            isGroup,
            sender,
            senderNumber,
            botNumber2,
            botNumber,
            pushname,
            isMe,
            isOwner,
            groupMetadata,
            groupName,
            participants,
            groupAdmins,
            isBotAdmins,
            isAdmins,
            reply,
        },
    ) => {
        try {
            if (!q || !q.startsWith("https://"))
                return reply("Please provide a valid Facebook video URL!");
            const data = await fetchJson(`${baseUrl}/api/fdown?url=${q}`);
            let desc = ` *ANGEL-MD FB DOWNLOADER...⚙️*

*Reply This Message With Option*

*1 Download FB Video In HD*
*2 Download FB Video In SD*

> *©ᴘᴏᴡᴇʀᴇᴅ ʙʏ ANGEL MD*`;

            const vv = await conn.sendMessage(
                from,
                {
                    image: { url: "https://files.catbox.moe/hm9rlw.jpg" },
                    caption: desc,
                },
                { quoted: mek },
            );

            conn.ev.on("messages.upsert", async (msgUpdate) => {
                const msg = msgUpdate.messages[0];
                if (!msg.message || !msg.message.extendedTextMessage) return;

                const selectedOption =
                    msg.message.extendedTextMessage.text.trim();

                if (
                    msg.message.extendedTextMessage.contextInfo &&
                    msg.message.extendedTextMessage.contextInfo.stanzaId ===
                        vv.key.id
                ) {
                    switch (selectedOption) {
                        case "1":
                            await conn.sendMessage(
                                from,
                                {
                                    video: { url: data.data.hd },
                                    const { fetchJson } = require("../lib/functions");
                                    const config = require("../config");
                                    const { cmd, commands } = require("../command");

                                    // FETCH API URL
                                    let baseUrl;
                                    (async () => {
                                        try {
                                            let baseUrlGet = await fetchJson(
                                                `https://raw.githubusercontent.com/prabathLK/PUBLIC-URL-HOST-DB/main/public/url.json`,
                                            );
                                            baseUrl = baseUrlGet.api;
                                        } catch (e) {
                                            console.error("Error fetching API URL:", e);
                                        }
                                    })();

                                 
