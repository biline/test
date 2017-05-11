module.exports = {
    dev: {
        db: 'mongodb://localhost/bi-line',
        appDb: 'mongodb://localhost/tuning',
        appHost: 'http://localhost:3000',
        host: 'http://localhost:5000',
        redis: {
            port: 6379,
            host: 'localhost',
            pass: ''
        },
        keys: {
            key: [62, 208, 153, 21, 6, 226, 104, 20, 147, 246, 9, 57, 177, 210, 224, 198, 217, 163, 45, 80, 202, 97, 17, 22, 114, 16, 170, 24, 186, 105, 195, 183],
            iv: [233, 129, 98, 5, 107, 62, 72, 9, 51, 26, 34, 72, 232, 40, 28, 5]
        }
    },

    staging: {
        //db: 'mongodb://heroku:by17P2P2qidoHuHjoN8lu_9fETRjlZxDj0PkHxl7xhXWxGGAIqeTr8pOk3TfJRn8jo8NPf5XkN-isE8BpLA6Cg@candidate.33.mongolayer.com:10079,candidate.32.mongolayer.com:10079/app20470433',
        redis: {
            port: '10425',
            host: 'pub-redis-10425.us-east-1-3.4.ec2.garantiadata.com',
            pass: 'XL8lcoCPazjx8ose'
        },
        keys: {
            key: [62, 208, 153, 21, 6, 226, 104, 20, 147, 246, 9, 57, 177, 210, 224, 198, 217, 163, 45, 80, 202, 97, 17, 22, 114, 16, 170, 24, 186, 105, 195, 183],
            iv: [233, 129, 98, 5, 107, 62, 72, 9, 51, 26, 34, 72, 232, 40, 28, 5]
        }
    },

    production: {
        //db: 'mongodb://heroku:BrU1Shf5SRjbEg-jzW6ujKEt1GDZ3FBYiCsTlPFouqsDUcLg4aFaRPoFwZdzyEFToTFt1qMj5bFxcrLXnjX0JA@candidate.33.mongolayer.com:10303/app20470521',
        redis: {
            port: '10425',
            host: 'pub-redis-10425.us-east-1-3.4.ec2.garantiadata.com',
            pass: 'XL8lcoCPazjx8ose'
        },
        keys: {
            key: [62, 208, 153, 21, 6, 226, 104, 20, 147, 246, 9, 57, 177, 210, 224, 198, 217, 163, 45, 80, 202, 97, 17, 22, 114, 16, 170, 24, 186, 105, 195, 183],
            iv: [233, 129, 98, 5, 107, 62, 72, 9, 51, 26, 34, 72, 232, 40, 28, 5]
        }
    }
};
