/**
 * Notifies about video position change.
 * Moved to 25_video_position_watcher
 */
function VideoPositionAddon() {
    this.TAG = 'VideoPositionAddon';
    this.MESSAGE_VIDEO_POSITION = 'message_video_position';

    this.onSrcChange = function(video) {
        // reset time
        Log.d(this.TAG, "New video opened??");
        //DeviceUtils.sendMessage(this.MESSAGE_VIDEO_POSITION, 0);
    };

    this.onCurrentTime = function(video) {
        // update time
        Log.d(this.TAG, "Video position changed to " + video.properties.currentTime);
        //DeviceUtils.sendMessage(this.MESSAGE_VIDEO_POSITION, video.properties.currentTime);
    };
}
