const axios = require('axios');
const handleError = require('cli-handle-error');
const to = require('await-to-js').default;
const ora = require('ora');
const {yellow} = require('chalk');

const spinner = ora({text:''})
const apiURL = `https://api.github.com/users/MuhammadIsrarKhan`
module.exports = async () => {
    spinner.start(`${yellow('FOLLOWERS')} Fetching...`);
    const [error,res] = await to(axios.get(apiURL));
    const ghFollowers = res?.data?.followers;
    handleError(`API CALL FAILED`, error, false, false);
    spinner.stop();
    // console.log(res)
    console.log(`Github Followers: ${ghFollowers}`)
}