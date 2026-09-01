/*:
 * @plugindesc [v1.0] LIYAB VO - Play voice-over SEs from audio/se/ subfolders via \vo[path] message code.
 * @author GDKJasper
 *
 * @help
 * ============================================================================
 * Intro
 * ============================================================================
 * Add voice-over clips to dialogue by placing a \vo[path] escape code inside
 * any Show Text message. The clip plays when the text processing reaches it.
 *
 * Paths are relative to audio/se/ and forward slashes address subfolders:
 *
 *   \vo[alice/hello1]Hello there!
 *   \vo[enemies/boss_laugh]...
 *
 * Files are resolved as audio/se/<path>.ogg (or .m4a on mobile). Keep both
 * formats in the project so deployed desktop and mobile builds work.
 *
 * ============================================================================
 * Script calls
 * ============================================================================
 * For use in event script commands or other plugins:
 *
 *   LIYAB_VO.play('alice/hello1');
 *   LIYAB_VO.play('alice/hello1', 80);              // volume
 *   LIYAB_VO.play('alice/hello1', 80, 120);         // volume, pitch
 *   LIYAB_VO.play('alice/hello1', 80, 120, -50);    // volume, pitch, pan
 *
 * Terms: free to use, credit optional.
 */
(function() {
    'use strict';

    var VO = {};

    VO.encodePath = function(name) {
        return name.split('/').map(encodeURIComponent).join('/');
    };

    VO.play = function(name, volume, pitch, pan) {
        if (!name) return;
        var ext = AudioManager.audioFileExt();
        var url = AudioManager._path + 'se/' + VO.encodePath(name) + ext;
        var buffer = new WebAudio(url);
        var se = {
            name: name,
            volume: volume != null ? volume : 100,
            pitch: pitch != null ? pitch : 100,
            pan: pan != null ? pan : 0
        };
        AudioManager.updateSeParameters(buffer, se);
        buffer.play(false);
        AudioManager._seBuffers.push(buffer);
    };

    var _Window_Message_processEscapeCharacter =
        Window_Message.prototype.processEscapeCharacter;
    Window_Message.prototype.processEscapeCharacter = function(code, textState) {
        if (code === 'VO') {
            var arr = /^\[([\w\/.\- ]+)\]/.exec(textState.text.slice(textState.index));
            if (arr) {
                VO.play(arr[1]);
                textState.index += arr[0].length;
            }
            return;
        }
        _Window_Message_processEscapeCharacter.call(this, code, textState);
    };

    window.LIYAB_VO = VO;
})();
