module.exports = {
    app: {
        token: 'OTg0NDA4MzAxODMzOTQ5MTk0.GcR0xH.1SXaQ1YJARfKyFLMR3q8Zk_gTRUOAF8svUwbOc',
        playing: 'by 个𝟑𝐘𝐀𝐒𝐑𝐀𝐇个 ❤️',
        global: true,
        guild: 'XXX'
    },

    opt: {
        DJ: {
            enabled: true,
            roleName: '',
            commands: [1]
        },
        maxVol: 100,
        leaveOnEnd: true,
        loopMessage: false,
        spotifyBridge: true,
        defaultvolume: 75,
        discordPlayer: {
            ytdlOptions: {
                quality: 'highestaudio',
                highWaterMark: 1 << 25
            }
        }
    }
};
