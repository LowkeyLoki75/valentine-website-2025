
const CONFIG = {
   
    valentineName: "Magan",


    pageTitle: "Will You Be My Valentine?",

  
    floatingEmojis: {
        hearts: ['❤️', '💖', '💝', '💗', '💓'],  
        bears: ['🧸', '🐻']             
    },

   
    questions: {
        first: {
            text: "Do you like me?",                                  
            yesBtn: "Yes",                                            
            noBtn: "No",                                             
            secretAnswer: "I hate you (jk I love you)"           
        },
        second: {
            text: "How much do you love me?",                         
            startText: "hehe this much",                                   
            nextBtn: "NEXT NEXT NEXT"                                         
        },
        third: {
            text: "Will you be my Valentine... and let me stay over for a few days or else I'll be homeless",
            yesBtn: "Yes!",                                          
            noBtn: "No"                                                
        }
    },

 
    loveMessages: {
        extreme: "REAALLYLLYYYYY AWHHHH YOU'RE MY FAVORITEEEEE MWAHHHH",  
        high: "HEHHEHEHEHEH I LOVE YOU SO MUCH",             
        normal: "That's it? You don't love me more?"                     
    },


    celebration: {
        title: "HEHEHE See you soon baby. You make me so happy",
        message: "Now sit back and enjoy the ride, this weekend is going to be amazing :)",
        emojis: "🫶💓💗❤️‍🔥🫶" 
    },

    
    colors: {
        backgroundStart: "#F5BBE3",      
        backgroundEnd: "#F06C77",        
        buttonBackground: "#F06C77",     
        buttonHover: "#F0806C",         
        textColor: "#ff4757"           
    },

 
    animations: {
        floatDuration: "15s",         
        floatDistance: "50px",          
        bounceSpeed: "0.5s",            
        heartExplosionSize: 1.5         
    },

  
    music: {
        enabled: true,                     
        autoplay: true,                    
        musicUrl: "https://res.cloudinary.com/ddnyrhgtw/video/upload/v1769987982/ScreenRecording_02-01-2026_17-01-32_1_retopu.mp3", 
        startText: "🎵 Play Music",       
        stopText: "🔇 Stop Music",        
        volume: 0.5                      
    }
                                       
};

// Don't modify anything below this line unless you know what you're doing
window.VALENTINE_CONFIG = CONFIG; 
