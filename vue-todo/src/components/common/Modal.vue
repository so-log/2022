<template>
    <div class="modal modal_dim" v-on:click.self="$emit('close')">
        <div class="modal_content">
            <p class="modal_text">
                <slot name="modal-text"></slot>
            </p>
            <button class="modal_close" v-on:click="$emit('close')">OK</button>
        </div>
    </div>
</template>
