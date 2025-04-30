export class Shell{
    #egg;
    /**
     * initializes shell component
     * @param {string} containerID 
     */
    init(containerID){
        console.log(`init container with ID:'${containerID}' to be app window.`);
    }
    /**
     * loads egg into shell
     * @param {any} egg 
     */
    load(egg){
        this.#egg = egg;
    }
    /**
     * start loaded egg
     */
    start(){
        this.#egg.run();
    }
}