/**
* User: wuxinshuang
* Date: 2019/3/14
* Time: 13:33
* remark:
*/
<template>
    <div>
        <div class="prism-player" id="player-con" ></div>
    </div>
</template>

<script>
    export default {
        name: "playVideo",
        props:{
            videoFormData:{
                type: [Object,String],
            },
            width: [String,Number],
            height: [String,Number]
        },
        watch:{
            videoFormData:{
                handler(newVal){
                    this.play(newVal)
                },
            }
        },
        data(){
            return{

            }
        },
        created(){
            let data = setTimeout(()=>{
                this.play(this.videoFormData)
            },300)
        },
        methods:{
            play(value) {
                new Aliplayer({
                    "id": "player-con",
                    vid : value.vid,
                    playauth : value.playAuth,
                    cover: value.coverUrl,
                    "qualitySort": "asc",
                    "width":  "100%",
                    "height": "300px" || this.height +"px" ,
                    "autoplay": false,
                    "isLive": false,
                    "rePlay": false,
                    "showBuffer": true,
                    "snapshot": false,
                    "showBarTime": 5000,
                    "useFlashPrism": true,
                    "skinLayout": [
                        {
                            "name": "bigPlayButton",
                            "align": "cc",
                            "x": 30,
                            "y": 80
                        },
                        {
                            "name": "controlBar",
                            "align": "blabs",
                            "x": 0,
                            "y": 0,
                            "children": [
                                {
                                    "name": "progress",
                                    "align": "tlabs",
                                    "x": 0,
                                    "y": 0
                                },
                                {
                                    "name": "playButton",
                                    "align": "tl",
                                    "x": 15,
                                    "y": 26
                                },
                                {
                                    "name": "nextButton",
                                    "align": "tl",
                                    "x": 10,
                                    "y": 26
                                },
                                {
                                    "name": "timeDisplay",
                                    "align": "tl",
                                    "x": 10,
                                    "y": 24
                                },
                                {
                                    "name": "fullScreenButton",
                                    "align": "tr",
                                    "x": 10,
                                    "y": 25
                                },
                                {
                                    "name": "streamButton",
                                    "align": "tr",
                                    "x": 10,
                                    "y": 23
                                },
                                {
                                    "name": "volume",
                                    "align": "tr",
                                    "x": 10,
                                    "y": 25
                                }
                            ]
                        },
                        {
                            "name": "fullControlBar",
                            "align": "tlabs",
                            "x": 0,
                            "y": 0,
                            "children": [
                                {
                                    "name": "fullTitle",
                                    "align": "tl",
                                    "x": 25,
                                    "y": 6
                                },
                                {
                                    "name": "fullNormalScreenButton",
                                    "align": "tr",
                                    "x": 24,
                                    "y": 13
                                },
                                {
                                    "name": "fullTimeDisplay",
                                    "align": "tr",
                                    "x": 10,
                                    "y": 12
                                },
                                {
                                    "name": "fullZoom",
                                    "align": "cc"
                                }
                            ]
                        }
                    ]

                })
            }
        }
    }
</script>

<style scoped>

</style>
