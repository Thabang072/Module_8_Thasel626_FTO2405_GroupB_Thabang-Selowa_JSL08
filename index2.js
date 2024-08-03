const branchInstance = null;

class BankBranch {
    constructor(branchInfo) {
        if (bankbranchInstance === null) {
            this.branchInfo = branchInfo;
            bankbranchInstance = this;
        } else {
            return bankbranchInstance;
        }
    }

    getBranchInfo() {
        return this.branchInfo;
    }
}

const branchA = BankBranch({name: "Absa",  code: 7955 ,address: "", number: "(012-0534465)"});
const branchB = BankBranch({name: "Absa",  code: 7955 ,address: "", number: "(012-0534465)"});

console.log('brachA information', branchA.getBranchInfo());
console.log('brachB information', branchB.getBranchInfo());