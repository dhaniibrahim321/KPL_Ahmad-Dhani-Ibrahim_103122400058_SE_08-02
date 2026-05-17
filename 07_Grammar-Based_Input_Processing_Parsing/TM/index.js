/**
 * JSDoc ini opsional mau dibuat cek ketat atau tidak.
 * Boleh dihapus, boleh dibuat ketat.
 * @param {string} text Teks yang diambil dari berkas
 * @returns {import('./structure').RobotsTxt} 
 */
function parseRobots(text) {
    // TODO
    const result = {
        agents: {},
        Sitemap: []
    };

    const lines = text.split("\n");

    let currentAgent = null;

    for (let line of lines){
        line = line.trim();

        if(line === "" || line.startsWith("#") ){
            continue;
        }

        if(line.toLocaleLowerCase().startsWith("user-agent:")) {

            currentAgent = line.replace(/user-agent:/i, "").trim().toLowerCase();

            if(!result.agents[currentAgent])  {
                result.agents[currentAgent] = {
                    Allow: [],
                    Disallow: []
                };
            }
        }

        else if(line.toLowerCase().startsWith("allow:")){
            const value = line.replace(/allow:/i, "").trim();

            if(currentAgent !== null) {
                result.agents[currentAgent].Allow.push(value);
            }
        }

        else if (line.toLocaleLowerCase().startsWith("disallow:")){
            const value = line.replace(/disallow:/i, "").trim();

            if(currentAgent !== null && value != "") {
                result.agents[currentAgent].Disallow.push(value);
            }
        }

        else if(line.toLocaleLowerCase().startsWith("sitemap:")) {
            const value = line.replace(/sitemap:/i, "").trim();

            result.Sitemap.push (value);
        }
    }
    return result;
}

module.exports = parseRobots;