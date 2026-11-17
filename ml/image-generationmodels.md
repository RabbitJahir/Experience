# Text to Image offline

### Finding Models (the architecture )
- [hugging face models](https://huggingface.co/models)
- search examples: Stable Diffusion 1.5, Stable Diffusion XL, Flux, SD 1.5 realistic checkpoints, SD 1.5 illustration models
- find the model, go to the source code, git clone.
- setup using ai

### Finding dataset (the training examples)
- [Civitai model](https://civitai.com/models)
- What type of image model are needed, select one, download it,
- setup using ai

#### process
- dataset -> base model -> techniques (Parameter-Efficient Fine-Tuning (PEFT)) -> modified model
- dataset is the collection of trained examples, 
- base model is the model used to run these datasets and get outputs
- PEFT are techniques to further modify the outputs and with base model + PEFT we get modified model

### Compatibility!!!
* READ IT!!!
- Not all datasets are compatable with every models
- search it up, 