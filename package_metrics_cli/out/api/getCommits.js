"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getCommits = void 0;
const core_1 = require("@octokit/core");
function getCommits(owner, repo) {
    return __awaiter(this, void 0, void 0, function* () {
        const octokit = new core_1.Octokit({ auth: process.env.GITHUB_TOKEN });
        try {
            const response = yield octokit.request('GET /repos/{owner}/{repo}/commits', {
                owner: owner,
                repo: repo,
            });
            return response;
        }
        catch (error) {
            console.error(error);
            throw error;
        }
    });
}
exports.getCommits = getCommits;
//# sourceMappingURL=getCommits.js.map