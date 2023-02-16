const Notarize = artifacts.require("Notarize")
 
module.exports = async(deployer, network, accounts) => {
    await deployer.deploy(Notarize)
    const notaAddress = await Notarize.deployed()
    console.log("Deployed Notarize contract @ :", notaAddress.address)

}