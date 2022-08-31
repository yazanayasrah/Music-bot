module.exports = {
    app: {
        token: '',
        playing: 'by  ❤️',
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
