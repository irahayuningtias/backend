const News = require('../model/news');
const NewsById = require('../model/news/:id')
const Feedback = require('../model/feedback');

async function news(req, res){
    try {
        const news = await News.findOne();
        res.json(news);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}

async function newsbyid(req, res){
    try {
        const newsbyid = parseInt(req.params.id);
        const news = await News.findUnique({
            where: {
                news_id: newsbyid,
            },
        });

        if (!news) {
            res.status(500).json({ error: err.message })
        } else {
            res.json(news);
        }
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}



// Post Contact Form Data
async function feedback(req, res){
    try {
        const feedback = await Feedback.create({
            data: {
                nama,
                email,
                telepon,
                masukan
            }
        });
        res.json({ success: true, feedback });
    } catch (err) {
        res.status(500).json({ success: false, error: err.message });
    }
}

module.exports = {
    news,
    newsbyid,
    feedback
}