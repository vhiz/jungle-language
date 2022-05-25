function nigerianumber (num){
    var number = [/(^\+?([234]{3})||[0]{1})?\s?(\d{8}$) /]
    if (num== number){
        return true
    }else{
        return false
    }
}