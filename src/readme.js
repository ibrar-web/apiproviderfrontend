
routes.post('/partners', middleware.middleware, parter.partners)
routes.post('/partners/crud', middleware.middleware, parter.partnerscrud)
routes.post('/partners/games', middleware.middleware, parter.games)
routes.post('/partners/games/crud', middleware.middleware, parter.gamescrud)
routes.post('/partners/history', middleware.middleware, parter.history)
routes.post('/partners/reports', middleware.middleware, parter.reports)
routes.post('/partners/users', middleware.middleware, parter.users)
routes.post('/partners/users/crud', middleware.middleware, parter.userscrud)

exports.partners = async (req, res) => {
    try {
        const dbo = await db()
        dbo.collection('partners').find().toArray((error, result) => {
            //limit selected fields
            if (error)
                return res.status(200).json({ errorMessage: 'Something went wrong with data', alert: true, type: 'red' })
            console.log(result)
            return res.status(200).send(result)
        })
    } catch (error) {

    }

}
exports.partnerscrud = async (req, res) => {
    try {
        const dbo = await db()
        const { type, email, username, password, id, updatetype, currency, status } = req.body
        switch (type) {
            case 'create':
                if (!email || !username || !password || password.length < 8)
                    return res.status(200).json({ errorMessage: 'email password not verified1', username: username, alert: true, type: 'red' })
                const userexisting = await dbo.collection('partners').find({ $or: [{ email: email }, { username: username }] }).toArray()
                console.log(userexisting)
                if (userexisting.length > 0)
                    return res.status(200).json({ errorMessage: 'Partner with same username or email exist', username: username, alert: true, type: 'red' })
                const salt = await bcrypt.genSalt()
                const haspassword = await bcrypt.hash(password, salt)
                const newpartner = {
                    email: email,
                    password: haspassword,
                    username: username,
                    domain: 'no domain',
                    status: '',
                    token: '',
                    refrer: '',
                    credit: 0,
                    creditused: 0,
                    profit: 0,
                    totaluser: 0,
                    bonusvalue: 0,
                    currency: 'no currency',
                    role: 'partner',
                    devicelogged: '',
                    socketid: ''
                }
                dbo.collection('partners').insertOne(newpartner, (error, result) => {
                    if (error)
                        return res.status(200).json({ errorMessage: 'Something went wrong while insrting partner', alert: true, type: 'red' })
                    return res.status(200).json({ errorMessage: 'partner Registred successfully', alert: true, type: 'green' })
                })
                break;
            case 'update':
                switch (updatetype) {
                    case 'password':
                        const { password } = req.body
                        const salt = await bcrypt.genSalt()
                        const hashpass = await bcrypt.hash(password, salt)
                        dbo.collection('partners').updateOne({ _id: ObjectID(id) }, { $set: { password: hashpass } }, (error, result) => {
                            if (error)
                                return res.status(200).json({ errorMessage: 'Something went while updating partner password', alert: true, type: 'red' })
                            return res.status(200).json({ errorMessage: 'Partner password updated successfully', alert: true, type: 'green' })
                        })
                        break;
                    case 'partnerinfo':
                        const partner = await dbo.find({ $or: [{ email: email }, { username: username }] }).toArray()
                        if (partner.length > 0)
                            if (partner[0]['_id'] != ObjectID(id))
                                return res.status(200).json({ errorMessage: 'Partner with given email or user already exist', alert: true, type: 'red' })
                        dbo.collection('partners').updateOne({ _id: ObjectID(id) }, { $set: { email: email, username: username, domain: domain, currency: currency } }, (error, result) => {
                            if (error)
                                return res.status(200).json({ errorMessage: 'Something went wrong while updating partner', alert: true, type: 'red' })
                            return res.status(200).json({ errorMessage: 'Partner updated successfully', alert: true, type: 'green', data: result })
                        })
                        break;
                    default:
                        break;
                }
                break;
            case 'delete':
                dbo.collection('partners').deleteOne({ _id: ObjectID(id) }, (error, result) => {
                    if (error)
                        return res.status(200).json({ errorMessage: 'Something went wrong while removing partner', alert: true, type: 'red' })
                    //write remaining code
                    return res.status(200).json({ errorMessage: 'Partner removed successfully', alert: true, type: 'green' })
                })
                break;
            case 'ban':
                dbo.collection('partners').updateOne({ _id: ObjectID(id) }, { $set: { status: status } }, (error, result) => {
                    if (error)
                        return res.status(200).json({ errorMessage: 'Something went wrong while removing partner', alert: true, type: 'red' })
                    //write remaining code
                    return res.status(200).json({ errorMessage: 'Partner removed successfully', alert: true, type: 'green' })
                })
                break;
            default:
                break;
        }

    } catch (error) {
        console.log('Partner erro', error)
    }
}
exports.games = async (req, res) => {
    try {
        const { pid } = req.body
        const dbo = await db();
        dbo.collection('partnergames').find({ partnerid: pid }).toArray((error, result) => {
            if (error)
                return res.status(200).json({ errorMessage: 'Something went wrong while fetching games list' })
            return res.status(200).send(result)
        })
    } catch (error) {
        console.log('partner games', error)
    }
}
exports.gamescrud = async (req, res) => {
    try {
        const { pid, gid, type, status } = res.body
        const dbo = await db()
        switch (type) {
            case 'allocation':
                const allocatedgame = await dbo.collection('partnergames').find({ $and: [{ gameid: gid }, { partnerid: pid }] }).toArray((error, result) => {
                    if (error)
                        return res.status(200).json({ errorMessage: 'Something went wrong while allocating game', alert: true, type: 'red' })
                    if (result.length > 0)
                        return res.status(200).json({ errorMessage: 'Game already allocated', alert: true, type: 'green' })
                    const gamedata = dbo.collection('games').findOne({ _id: ObjectID(gid) }).toArray((error, result) => {
                        if (error)
                            return res.status(200).json({ errorMessage: 'Something went wrong while allocating game', alert: true, type: 'red' })
                        var game = result(0)
                        //complete alloation code

                    })
                })
                break;
            case 'edit':
                //will complete after writing games code
                break;
            case 'status':
                dbo.collection('partnergames').updateOne({ $and: [{ gameid: gid }, { partnerid: pid }] }, { status: status }, (error, result) => {
                    if (error)
                        return res.status(200).json({ errorMessage: 'could not update partner game', alert: true, type: 'red' })
                    return res.status(200).json({ errorMessage: 'Partner game updated', alert: true, type: 'green' })
                })
                break;
            case 'delete':
                dbo.collection('partnergames').deleteOne({ $and: [{ gameid: gid }, { partnerid: pid }] }, (error, result) => {
                    if (error)
                        return res.status(200).json({ errorMessage: 'could not delete partner game', alert: true, type: 'red' })
                    return res.status(200).json({ errorMessage: 'Game removed from partner', alert: true, type: 'green' })
                })
                break;
            default:
                break;
        }

    } catch (error) {
        console.log('partner games crud', error)
    }
}