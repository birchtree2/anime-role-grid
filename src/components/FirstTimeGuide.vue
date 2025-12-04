<script setup lang="ts">
defineProps<{
  show: boolean
}>()

const emit = defineEmits(['close'])
</script>

<template>
  <Transition
    enter-active-class="transition duration-300 ease-out"
    enter-from-class="opacity-0 scale-95"
    enter-to-class="opacity-100 scale-100"
    leave-active-class="transition duration-200 ease-in"
    leave-from-class="opacity-100 scale-100"
    leave-to-class="opacity-0 scale-95"
  >
    <div 
      v-if="show" 
      class="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm px-4" 
      @click="emit('close')"
    >
      <!-- Outer Container -->
      <div 
        class="bg-white dark:bg-gray-900 w-full max-w-md max-h-[85vh] rounded-2xl shadow-2xl border-4 border-black dark:border-gray-700 relative flex flex-col overflow-hidden" 
        @click.stop
      >
        <!-- Close Button -->
        <button 
          class="absolute top-4 right-4 w-8 h-8 flex items-center justify-center bg-black text-white rounded-full hover:bg-[#e4007f] transition-colors z-20"
          @click="emit('close')"
        >
          <div class="i-carbon-close text-xl" />
        </button>

        <!-- Scrollable Content -->
        <div class="overflow-y-auto flex-1 p-6 flex flex-col gap-6 scrollbar-hide">
          
          <!-- Welcome Image -->
          <div class="w-full flex items-center justify-center shrink-0 pt-2">
             <img 
               src="/cana4.webp" 
               class="h-32 object-contain"
               alt="Welcome"
             />
          </div>

          <!-- Title -->
          <div class="text-center shrink-0">
            <h2 class="text-xl font-bold text-[#000000] dark:text-white mb-1">
              欢迎来到
            </h2>
            <h1 class="text-3xl font-black mb-2 text-[#000000] dark:text-white tracking-widest" style="font-family: 'Noto Serif SC', serif;">
              【我推<span class="text-[#e4007f]">的</span>格子】
            </h1>
          </div>

          <!-- Content Sections -->
          <div class="space-y-5 text-sm text-gray-700 dark:text-gray-300 font-medium">

            <!-- Community (Moved Up) -->
            <!-- Community Groups -->
            <div class="bg-pink-50/50 dark:bg-pink-900/10 border border-pink-100 dark:border-pink-800/30 p-4 rounded-2xl">
              <div class="flex gap-2 items-center mb-2 text-[#e4007f] font-bold">
                <div class="i-carbon-group text-lg" />
                <h3>加入组织</h3>
              </div>
              
              <p class="text-xs text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
                这是一些<b>刚刚创立</b>的 QQ 组织，主打 <b>分享格子</b> 与 <b>寻找同好</b>。<br>
                群内氛围和谐，现在正是 <b>入股</b> 的好时期！
              </p>

              <div class="grid grid-cols-2 gap-3">
                <!-- Q Group: ACN -->
                <a href="https://qun.qq.com/universal-share/share?ac=1&authKey=1LsjjxDEHjGWTDq3%2FRSfv4Qcb3ESkVgBC3mQmdOPhuFBeEfIbQnuHFGI%2BEA4QLIE&busi_data=eyJncm91cENvZGUiOiIxMDE4MjEzNjUzIiwidG9rZW4iOiJ1aUhXOHFjdlQwSGJlZjNCN0NWS0laRzI3MEY1MHhvczZiRW9EOU1xSGRxaTRJS21aSkRXWFhKTmMrWS9mM2JCIiwidWluIjoiMTkxNjY0NzYxNiJ9&data=ODTRpLsOGRek2N-cVzqTSr2rKDj1y3nmdtdgRnP_iZE7WKUGq9fr2LJHiSf9LLX4YNX78Rpq_mpvT8ROyfoC8g&svctype=4&tempid=h5_group_info" target="_blank" class="group-btn group">
                  <div class="flex flex-col h-full justify-between relative z-10">
                    <div class="flex items-center justify-between w-full">
                      <div class="text-lg font-black tracking-wide leading-none">ACN 交流</div>
                      <div class="i-carbon-arrow-up-right text-xl opacity-80 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    </div>
                    <div class="text-xs font-bold opacity-90 mt-1">青春·恋爱·校园</div>
                  </div>
                </a>

                <!-- W Group: Mobile/Anime Games -->
                <a href="https://qun.qq.com/universal-share/share?ac=1&authKey=N%2Bfruq0iPx8IhUvbksaoNR2vPtCr7tTmrRRPfmGvuYlExWoy2LZsGfaL183PzNXO&busi_data=eyJncm91cENvZGUiOiI4NTkzNjEwOTkiLCJ0b2tlbiI6Ii9DQy9KZ0l4bzNObWFrOXJwbEV0Q3cxRmVNNmtOOGpDZFNLOCt1bHNxb05WL29zQVo1UlE4czVTWDM4dU8vZUsiLCJ1aW4iOiIxOTE2NjQ3NjE2In0%3D&data=caBB9HR43RsqoEKBASBC1plB48DZi3RsJLnQ7dgEYPj8fmVGnVqGWLn7YbYe_oZcAHod8KqRzsdl5hXVUQ9OaQ&svctype=4&tempid=h5_group_info" target="_blank" class="group-btn group">
                  <div class="flex flex-col h-full justify-between relative z-10">
                    <div class="flex items-center justify-between w-full">
                      <div class="text-lg font-black tracking-wide leading-none">二游</div>
                      <div class="i-carbon-arrow-up-right text-xl opacity-80 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    </div>
                    <div class="text-xs font-bold opacity-90 mt-1">手游·抽卡·剧情</div>
                  </div>
                </a>

                <!-- E Group: Galgame -->
                <a href="https://qun.qq.com/universal-share/share?ac=1&authKey=KgGU8v2up7Umiwm97tlf6w9sQtNEHYrre4N%2BMKTxBsGS8b0mjwfgCm32QT3wafRj&busi_data=eyJncm91cENvZGUiOiIxNzYxODYwMTkiLCJ0b2tlbiI6InFTd2dSWmNyWXgvaHJvaHl3akd2bCtpdFRyOUd1QVdsM2t6MXNuczdpRjkyUHdyYzY4bngwbnVWV1MwYkI3WjYiLCJ1aW4iOiIzNjYzNTU4MDg3In0%3D&data=q2YUZm5dBCs7tzjCofgNzBxV77kTJNI5nHbeQ8b7zp8M3AeiUa2dqAyois_Pg4RFdwC-SJF4XpuYpAy9twSURg&svctype=4&tempid=h5_group_info" target="_blank" class="group-btn group">
                  <div class="flex flex-col h-full justify-between relative z-10">
                    <div class="flex items-center justify-between w-full">
                      <div class="text-lg font-black tracking-wide leading-none">Galgame</div>
                      <div class="i-carbon-arrow-up-right text-xl opacity-80 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    </div>
                    <div class="text-xs font-bold opacity-90 mt-1">美少女游戏</div>
                  </div>
                </a>

                <!-- R Group: Water -->
                <a href="https://qm.qq.com/q/kHNDRQUhj4" target="_blank" class="group-btn group">
                  <div class="flex flex-col h-full justify-between relative z-10">
                    <div class="flex items-center justify-between w-full">
                      <div class="text-lg font-black tracking-wide leading-none">神人大水群</div>
                      <div class="i-carbon-arrow-up-right text-xl opacity-80 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    </div>
                    <div class="text-xs font-bold opacity-90 mt-1">闲聊·吹水·日常</div>
                  </div>
                </a>
              </div>
            </div>

            <!-- Star Project -->
            <a 
              href="https://github.com/birchtree2/anime-role-grid"
              target="_blank"
              class="w-full py-2.5 bg-[#24292e] dark:bg-gray-100 text-white dark:text-gray-900 rounded-lg flex items-center justify-center gap-2 hover:opacity-90 transition-opacity shadow-sm"
            >
              <div class="i-carbon-logo-github text-lg" />
              <div class="flex flex-col items-start leading-none">
                <span class="font-bold text-xs">GitHub Star</span>
                <span class="text-[10px] opacity-80 font-normal">支持开源项目</span>
              </div>
            </a>
            
            <!-- 1. Templates -->
            <div class="flex gap-3 items-start">
              <div class="w-6 h-6 rounded-full bg-[#e4007f] text-white flex-shrink-0 flex items-center justify-center font-bold text-xs mt-0.5">1</div>
              <div>
                <h3 class="font-bold text-black dark:text-white mb-1">自由切换模板</h3>
                <p>点击下方的 <span class="text-[#e4007f] font-bold">“当前模板”</span> 按钮，可以切换不同的格子布局（如 5x3, CP问卷等）。</p>
              </div>
            </div>

            <!-- 2. FAQ -->
            <div class="flex gap-3 items-start">
              <div class="w-6 h-6 rounded-full bg-[#e4007f] text-white flex-shrink-0 flex items-center justify-center font-bold text-xs mt-0.5">2</div>
              <div>
                <h3 class="font-bold text-black dark:text-white mb-1">查看常见问题</h3>
                <p>遇到问题？点击 <span class="text-[#e4007f] font-bold">“食用指南 & 常见问题”</span> 可以查看详细教程。</p>
              </div>
            </div>

            <!-- 3. Browser Warning -->
            <div class="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-700/50 p-3 rounded-lg">
              <div class="flex gap-2 items-center mb-1 text-yellow-700 dark:text-yellow-500 font-bold">
                <div class="i-carbon-warning-filled text-lg" />
                <h3>浏览器建议</h3>
              </div>
              <p class="text-xs text-yellow-800 dark:text-yellow-200/80 leading-relaxed">
                为了获得最佳体验（特别是图片保存功能），<br>
                <span class="font-bold">强烈建议不要使用 QQ、微信等软件的内置浏览器。</span><br>
                请使用 Chrome, Safari, Edge 等原生浏览器打开。
              </p>
            </div>

          </div>

          <!-- Footer Action -->
          <div class="pt-2">
            <button 
              class="w-full py-3 bg-black dark:bg-white text-white dark:text-black rounded-xl font-bold hover:opacity-90 transition-opacity"
              @click="emit('close')"
            >
              开始制作
            </button>
          </div>

        </div>
      </div>
    </div>
  </Transition>
</template>

<style scoped>
@keyframes bounce-low {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-10px); }
}

.animate-bounce-low {
  animation: bounce-low 2s ease-in-out infinite;
}

/* Hide scrollbar */
.scrollbar-hide::-webkit-scrollbar {
    display: none;
}
.scrollbar-hide {
    -ms-overflow-style: none;
    scrollbar-width: none;
}

.group-btn {
  @apply relative overflow-hidden rounded-xl p-4
  bg-gradient-to-br from-[#e4007f] to-[#bd0068] text-white
  shadow-md shadow-pink-500/20
  transition-all duration-200 ease-out;
}

.group-btn:hover {
  @apply transform scale-[1.02] shadow-lg shadow-pink-500/40 brightness-105;
}

.group-btn:active {
  @apply transform scale-95 brightness-95;
}
</style>
